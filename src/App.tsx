import React, {useEffect, useState} from 'react'
import {Container, Sprite, Stage, useApp} from '@inlet/react-pixi'
import Camera, {useCamera} from './Camera'
import Player from './Player'
import {APP_HEIGHT, APP_WIDTH, OFFSET} from './constants'
import * as PIXI from 'pixi.js'
import ResourceLoader from './ResourceLoader'
import Mobs from './Mobs'
import MobsHelper, {HelperData} from './MobsHelper'
import produce from 'immer'
import {useAtom} from 'jotai'
import {mobsConfigAtom} from './stores'
import {useUpdateHelperData} from './useUpdateHelperData'
import Boundaries from './Boundaries'
import BoundaryExceptions from './BoundaryExceptions'
import BackgroundSound, {useBackgroundSound} from './BackgroundSound'

export interface AppProps {}

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

const App = ({}: AppProps) => {
  return (
    <ResourceLoader resources={RESOURCES} fallback={<div>Loading...</div>}>
      <StateContainer />
    </ResourceLoader>
  )
}

interface StateContainerProps {}

const StateContainer = ({}: StateContainerProps) => {
  const [helperData] = useUpdateHelperData()
  const [cursorPosition, setCursorPosition] = useState<{x: number; y: number}>()
  const [mobsConfig, setMobsConfig] = useAtom(mobsConfigAtom)

  return (
    <>
      <Stage width={APP_WIDTH} height={APP_HEIGHT} options={{backgroundAlpha: 0}}>
        <BackgroundSound>
          <Camera>
            <Park
              helperData={helperData}
              cursorPosition={cursorPosition}
              onChangeCursorPosition={({x, y}) => {
                setCursorPosition({x, y})
              }}
              onClick={() => {
                const x = cursorPosition
                  ? Math.round(cursorPosition.x + APP_WIDTH / 2 + OFFSET.x)
                  : 0
                const y = cursorPosition
                  ? Math.round(cursorPosition.y + APP_HEIGHT / 2 + OFFSET.y)
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
      </Stage>
      <button className="absolute left-0 bottom-0 h-[9.375rem] w-[9.375rem] translate-x-[-50%] translate-y-[50%] bg-[url('/club.png')] bg-cover bg-center transition-transform hover:scale-110">
        <span className="opacity-0">!</span>
      </button>
      <button className="absolute right-0 bottom-0 h-[9.375rem] w-[9.375rem] translate-x-[50%] translate-y-[50%] bg-[url('/dict.png')] bg-cover bg-center transition-transform hover:scale-110">
        <span className="opacity-0">!</span>
      </button>
      {/*<MobsHelper cursorPosition={cursorPosition} />*/}
    </>
  )
}

interface ParkProps {
  helperData?: HelperData
  cursorPosition?: {x: number; y: number}
  onChangeCursorPosition?: ({x, y}: {x: number; y: number}) => void
  onClick?: () => void
}

const Park = ({helperData, cursorPosition, onChangeCursorPosition, onClick}: ParkProps) => {
  const app = useApp()
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
        <Container position={[-APP_WIDTH / 2 - OFFSET.x, -APP_HEIGHT / 2 - OFFSET.y]} zIndex={0}>
          <Map />
        </Container>
        {/*<Boundaries />*/}
        {/*<BoundaryExceptions />*/}
        <Player />
        <Mobs />
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
