import React from 'react'
import {Sprite, Stage} from '@inlet/react-pixi'
import mapImg from '../public/map.png'
import Camera from './Camera'
import Player from './Player'
import {APP_HEIGHT, APP_WIDTH, MOB_CONFIG_LIST, OFFSET} from './constants'
import Mob from './Mob'
import * as PIXI from 'pixi.js'

export interface AppProps {}

const App = ({}: AppProps) => {
  return (
    <Stage width={APP_WIDTH} height={APP_HEIGHT} options={{backgroundAlpha: 0}}>
      <Camera>
        <Park />
      </Camera>
    </Stage>
  )
}

interface ParkProps {}

const Park = ({}: ParkProps) => {
  return (
    <>
      <Map />
      {MOB_CONFIG_LIST.map((mobConfig, mobIndex) => (
        <Mob key={mobIndex} id={mobIndex} mobConfig={mobConfig} />
      ))}

      <Player />
    </>
  )
}

interface MapProps {}

const Map = ({}: MapProps) => {
  const texture = PIXI.utils.TextureCache['/map.png']
  return (
    <Sprite
      texture={texture}
      anchor={0}
      x={-APP_WIDTH / 2 - OFFSET.x}
      y={-APP_HEIGHT / 2 - OFFSET.y}
    />
  )
}

export default App
