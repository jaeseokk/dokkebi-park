import React, {useEffect, useState} from 'react'
import {Container, Sprite, Stage, useApp} from '@inlet/react-pixi'
import Camera, {useCamera} from './Camera'
import Player from './Player'
import {OFFSET} from './constants'
import * as PIXI from 'pixi.js'
import ResourceLoader from './ResourceLoader'
import Mobs from './Mobs'
import MobsHelper, {HelperData} from './MobsHelper'
import produce from 'immer'
import {useAtom} from 'jotai'
import {mobsConfigAtom} from './stores'
import {useUpdateHelperData} from './useUpdateHelperData'
import BackgroundSound, {useBackgroundSound} from './BackgroundSound'
import {useContextBridge} from '@src/useContextBridge'
import {StageSizeContext, StageSizeProvider, useStageSize} from '@src/StageSizeProvider'

export interface AppProps {
  onSelectMob: (mobIndex: number) => void
  onMoveFirstArchiveDetail: () => void
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
]

const App = ({onSelectMob, onMoveFirstArchiveDetail}: AppProps) => {
  return (
    <StageSizeProvider>
      <ResourceLoader resources={RESOURCES} fallback={<div>Loading...</div>}>
        <StateContainer
          onSelectMob={onSelectMob}
          onMoveFirstArchiveDetail={onMoveFirstArchiveDetail}
        />
      </ResourceLoader>
    </StageSizeProvider>
  )
}

interface StateContainerProps {
  onSelectMob: (mobIndex: number) => void
  onMoveFirstArchiveDetail: () => void
}

const StateContainer = ({onSelectMob, onMoveFirstArchiveDetail}: StateContainerProps) => {
  const size = useStageSize()
  const [helperData] = useUpdateHelperData()
  const [cursorPosition, setCursorPosition] = useState<{x: number; y: number}>()
  const [mobsConfig, setMobsConfig] = useAtom(mobsConfigAtom)
  const StageSizeContextBridge = useContextBridge(StageSizeContext)

  return (
    <>
      <Stage {...size} options={{backgroundColor: 0x005ed0}}>
        <StageSizeContextBridge>
          <BackgroundSound>
            <Camera>
              <Park
                onSelectMob={onSelectMob}
                helperData={helperData}
                cursorPosition={cursorPosition}
                onChangeCursorPosition={({x, y}) => {
                  setCursorPosition({x, y})
                }}
                onClick={() => {
                  const x = cursorPosition
                    ? Math.round(cursorPosition.x + size.width / 2 + OFFSET.x)
                    : 0
                  const y = cursorPosition
                    ? Math.round(cursorPosition.y + size.height / 2 + OFFSET.y)
                    : 0

                  setMobsConfig(
                    produce(mobsConfig, (draft) => {
                      draft[helperData.index] = {
                        position: {x, y},
                        scale: helperData.scale,
                      }
                    }),
                  )
                }}
              />
            </Camera>
          </BackgroundSound>
        </StageSizeContextBridge>
      </Stage>
      <button
        className="absolute left-6 bottom-6 h-[9.375rem] w-[9.375rem] bg-[url('/club.png')] bg-cover bg-center transition-transform hover:scale-110"
        onClick={onMoveFirstArchiveDetail}
      >
        <span className="opacity-0">!</span>
      </button>
      <button className="absolute right-6 bottom-6 h-[9.375rem] w-[9.375rem] bg-[url('/dict.png')] bg-cover bg-center transition-transform hover:scale-110">
        <span className="opacity-0">!</span>
      </button>
      {/*<MobsHelper cursorPosition={cursorPosition} />*/}
    </>
  )
}

interface ParkProps {
  onSelectMob: (mobIndex: number) => void
  helperData?: HelperData
  cursorPosition?: {x: number; y: number}
  onChangeCursorPosition?: ({x, y}: {x: number; y: number}) => void
  onClick?: () => void
}

const Park = ({
  onSelectMob,
  helperData,
  cursorPosition,
  onChangeCursorPosition,
  onClick,
}: ParkProps) => {
  const app = useApp()
  const size = useStageSize()
  const {getViewport} = useCamera()
  const {play, stop} = useBackgroundSound()

  useEffect(() => {
    play()
    return () => {
      stop()
    }
  }, [])

  app.renderer.plugins.interaction.moveWhenInside = true

  return (
    <>
      <Container
        sortableChildren
        interactive
        pointermove={(e) => {
          const viewport = getViewport()
          const position = viewport?.toWorld(e.data.global)

          if (!position) {
            return
          }

          onChangeCursorPosition?.({
            x: position.x,
            y: position.y,
          })
        }}
        pointerdown={onClick}
      >
        <Container position={[-size.width / 2 - OFFSET.x, -size.height / 2 - OFFSET.y]} zIndex={0}>
          <Map />
        </Container>
        {/*<Boundaries />*/}
        {/*<BoundaryExceptions />*/}
        <Player />
        <Mobs onSelectMob={onSelectMob} />
        {/*{helperData && cursorPosition && (*/}
        {/*  <MobPositionTestCursor position={cursorPosition} helperData={helperData} />*/}
        {/*)}*/}
      </Container>
    </>
  )
}

interface MapProps {}

const Map = ({}: MapProps) => {
  const texture = PIXI.utils.TextureCache['/map.png']
  // const texture = PIXI.utils.TextureCache['/map_with_mobs_info.png']
  return <Sprite texture={texture} anchor={0} />
}

export default App
