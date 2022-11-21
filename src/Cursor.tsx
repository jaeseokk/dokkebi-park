import React from 'react'
import {Sprite} from '@inlet/react-pixi'
import {useMultiPackedSpritesheet} from './useMultiPackedSpritesheet'
import {HelperData} from './MobsHelper'

export interface CursorProps {
  position: {x: number; y: number}
  helperData: HelperData
}

const Cursor = ({position, helperData}: CursorProps) => {
  const sprites = useMultiPackedSpritesheet({
    spritesheetUrls: ['/mob-sprites-0.png', '/mob-sprites-1.png', '/mob-sprites-2.png'],
    frameWidth: 200,
    frameHeight: 200,
  })

  if (!helperData.enabled) {
    return null
  }

  return (
    <Sprite
      texture={sprites[Number(helperData.index) || 0]}
      anchor={0.5}
      scale={Number(helperData.scale) || 1}
      x={position.x}
      y={position.y}
    />
  )
}

export default Cursor
