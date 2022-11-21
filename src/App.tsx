import React, {useState} from 'react'
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

export interface AppProps {}

const App = ({}: AppProps) => {
  return (
    <ResourceLoader
      resources={[
        '/map.png',
        '/map_with_mobs_info.png',
        '/playerDown.png',
        '/playerUp.png',
        '/playerLeft.png',
        '/playerRight.png',
        '/mob-sprites-0.png',
        '/mob-sprites-1.png',
        '/mob-sprites-2.png',
      ]}
    >
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
        <Camera>
          <Park
            helperData={helperData}
            cursorPosition={cursorPosition}
            onChangeCursorPosition={({x, y}) => {
              setCursorPosition({x, y})
            }}
            onClick={() => {
              const x = cursorPosition ? Math.round(cursorPosition.x + APP_WIDTH / 2 + OFFSET.x) : 0
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
      </Stage>
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

  app.renderer.plugins.interaction.moveWhenInside = true

  return (
    <>
      <Container
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
        <Container position={[-APP_WIDTH / 2 - OFFSET.x, -APP_HEIGHT / 2 - OFFSET.y]}>
          <Map />
          <Mobs />
        </Container>
        <Player />
        {/*{helperData && cursorPosition && (*/}
        {/*  <Cursor position={cursorPosition} helperData={helperData} />*/}
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
