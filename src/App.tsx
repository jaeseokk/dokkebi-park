import React, {forwardRef, useEffect, useImperativeHandle, useRef} from 'react'
import {Container, Sprite, Stage, useApp} from '@inlet/react-pixi'
import Camera from './Camera'
import Player from './Player'
import {OFFSET} from './constants'
import * as PIXI from 'pixi.js'
import ResourceLoader from './ResourceLoader'
import Mobs from './Mobs'
import {HelperData} from './MobsHelper'
import BackgroundSoundProvider, {useBackgroundSound} from './BackgroundSoundProvider'
import {useContextBridge} from '@src/useContextBridge'
import {StageSizeContext, StageSizeProvider, useStageSize} from '@src/StageSizeProvider'
import Bang, {BangRef} from '@src/Bang'
import Boundaries from '@src/Boundaries'
import BoundaryExceptions from '@src/BoundaryExceptions'
import VideoTrigger from '@src/VideoTrigger'

export interface AppRef {
  playBang: () => void
}

const RESOURCES = [
  '/map.png',
  '/map_with_mobs_info.png',
  '/playerDown.png',
  '/playerUp.png',
  '/playerLeft.png',
  '/playerRight.png',
  '/mob-sprites-0.png',
  '/mob-sprites-1.png',
  '/mob-sprites-2.png',
  '/bang1.png',
  '/bang2.png',
  '/bang3.png',
  '/bang4.png',
  '/bang5.png',
  '/bang6.png',
  '/bang7.png',
  '/bang8.png',
  '/bang9.png',
  '/bang10.png',
  '/bang11.png',
  '/bang12.png',
  '/bang13.png',
  '/bang14.png',
]

export interface AppProps {
  isPlaying: boolean
  forwardedRef: React.Ref<AppRef>
  playSound: boolean
  onSelectMob: (mobIndex: number) => void
}

const App = ({isPlaying, playSound, onSelectMob, forwardedRef}: AppProps) => {
  const bangRef = useRef<BangRef>(null)

  useImperativeHandle(
    forwardedRef,
    () => {
      return {
        playBang: async () => {
          return bangRef.current?.play()
        },
      }
    },
    [],
  )

  return (
    <StageSizeProvider>
      <ResourceLoader resources={RESOURCES} fallback={<div>Loading...</div>}>
        <StateContainer>
          <Park isPlaying={isPlaying} playSound={playSound} onSelectMob={onSelectMob} />
          <Bang zIndex={10} ref={bangRef} />
        </StateContainer>
      </ResourceLoader>
    </StageSizeProvider>
  )
}

interface StateContainerProps {
  children: React.ReactNode
}

const StateContainer = ({children}: StateContainerProps) => {
  const size = useStageSize()
  const StageSizeContextBridge = useContextBridge(StageSizeContext)

  return (
    <>
      <Stage {...size} options={{backgroundColor: 0x005ed0}}>
        <StageSizeContextBridge>
          <BackgroundSoundProvider>{children}</BackgroundSoundProvider>
        </StageSizeContextBridge>
      </Stage>
      {/*<MobsHelper cursorPosition={cursorPosition} />*/}
    </>
  )
}

interface ParkProps {
  isPlaying: boolean
  playSound: boolean
  onSelectMob: (mobIndex: number) => void
}

const Park = ({isPlaying, playSound, onSelectMob}: ParkProps) => {
  const app = useApp()
  const size = useStageSize()

  app.renderer.plugins.interaction.moveWhenInside = true

  return (
    <Camera>
      <Container sortableChildren interactive>
        <Container position={[-size.width / 2 - OFFSET.x, -size.height / 2 - OFFSET.y]} zIndex={0}>
          <Map playSound={playSound} />
        </Container>
        <Boundaries />
        <BoundaryExceptions />
        <VideoTrigger />
        <Player isPlaying={isPlaying} />
        <Mobs onSelectMob={onSelectMob} />
      </Container>
    </Camera>
  )
}

interface MapProps {
  playSound: boolean
}

const Map = ({playSound}: MapProps) => {
  const {play, stop, pause} = useBackgroundSound()

  useEffect(() => {
    if (playSound) {
      play()
    } else {
      pause()
    }
    return () => {
      stop()
    }
  }, [playSound])

  const texture = PIXI.utils.TextureCache['/map.png']
  // const texture = PIXI.utils.TextureCache['/map_with_mobs_info.png']
  return <Sprite texture={texture} anchor={0} />
}

export default App
