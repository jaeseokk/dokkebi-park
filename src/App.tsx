import React, {forwardRef, useEffect, useImperativeHandle, useRef} from 'react'
import {Container, Sprite, Stage, useApp} from '@inlet/react-pixi'
import Camera, {useCamera} from './Camera'
import Player from './Player'
import {MOBS_SPRITESHEET_URLS, OFFSET} from './constants'
import * as PIXI from 'pixi.js'
import ResourceLoader from './ResourceLoader'
import Mobs from './Mobs'
import MobsHelper, {HelperData} from './MobsHelper'
import BackgroundSoundProvider, {useBackgroundSound} from './BackgroundSoundProvider'
import {useContextBridge} from '@src/useContextBridge'
import {StageSizeContext, StageSizeProvider, useStageSize} from '@src/StageSizeProvider'
import Bang, {BangRef} from '@src/Bang'
import Boundaries from '@src/Boundaries'
import BoundaryExceptions from '@src/BoundaryExceptions'
import VideoTrigger from '@src/VideoTrigger'
import {helperDataAtom, mobsConfigAtom} from '@src/stores'
import MobPositionTestCursor from '@src/MobPositionTestCursor'
import {useAtom} from 'jotai'
import produce from 'immer'

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
  ...MOBS_SPRITESHEET_URLS,
]

export interface AppProps {
  isPlaying: boolean
  forwardedRef: React.Ref<AppRef>
  playSound: boolean
  onSelectMob: (mobId: string) => void
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
          <Camera>
            <Park isPlaying={isPlaying} playSound={playSound} onSelectMob={onSelectMob} />
          </Camera>
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
      {/*<MobsHelper />*/}
    </>
  )
}

interface ParkProps {
  isPlaying: boolean
  playSound: boolean
  onSelectMob: (mobId: string) => void
}

const Park = ({isPlaying, playSound, onSelectMob}: ParkProps) => {
  const app = useApp()
  const size = useStageSize()
  const {getViewport} = useCamera()
  const [helperData, setHelperData] = useAtom(helperDataAtom)
  const [mobsConfig, setMobsConfig] = useAtom(mobsConfigAtom)

  const getWorldPosition = (point: PIXI.Point) => {
    const viewport = getViewport()

    if (!viewport) {
      return null
    }

    return viewport.toWorld(point)
  }

  app.renderer.plugins.interaction.moveWhenInside = true

  return (
    <Container
      sortableChildren
      interactive
      mousemove={(e) => {
        if (!helperData.enabled) {
          return
        }

        const worldPosition = getWorldPosition(e.data.global)

        if (!worldPosition) {
          return
        }

        const {x, y} = worldPosition
        setHelperData((prev) => ({
          ...prev,
          cursorPosition: {
            x: Math.round(x + size.width / 2 + OFFSET.x),
            y: Math.round(y + size.height / 2 + OFFSET.y),
          },
        }))
      }}
      click={(e) => {
        if (!helperData.enabled) {
          return
        }

        const worldPosition = getWorldPosition(e.data.global)

        if (!worldPosition) {
          return
        }

        const {x, y} = worldPosition
        setMobsConfig(
          produce(mobsConfig, (draft) => {
            draft[helperData.index] = {
              position: helperData.cursorPosition,
              scale: helperData.scale,
            }
          }),
        )
      }}
    >
      <Container position={[-size.width / 2 - OFFSET.x, -size.height / 2 - OFFSET.y]} zIndex={0}>
        <Map playSound={playSound} />
      </Container>
      {/*<Boundaries />*/}
      {/*<BoundaryExceptions />*/}
      {/*<VideoTrigger />*/}
      <Player isPlaying={isPlaying} />
      <Mobs onSelectMob={onSelectMob} />
      <MobPositionTestCursor />
    </Container>
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
