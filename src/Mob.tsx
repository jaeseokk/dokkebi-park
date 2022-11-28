import React from 'react'
import {Sprite} from '@inlet/react-pixi'
import {useMultiPackedSpritesheet} from './useMultiPackedSpritesheet'
import {MobConfig, OFFSET} from './constants'
import {useStageSize} from '@src/StageSizeProvider'

export interface MobProps {
  id: number
  mobConfig: MobConfig
}

const Mob = ({id, mobConfig: {position, scale = 1}}: MobProps) => {
  const size = useStageSize()
  const sprites = useMultiPackedSpritesheet({
    spritesheetUrls: ['/mob-sprites-0.png', '/mob-sprites-1.png', '/mob-sprites-2.png'],
    frameWidth: 200,
    frameHeight: 200,
  })

  return (
    <Sprite
      texture={sprites[id]}
      anchor={[0.5, 0.9]}
      scale={scale}
      x={position.x * 36.55 - size.width / 2 - OFFSET.x}
      y={position.y * 36.38 - size.height / 2 - OFFSET.y}
    />
  )
}

export default Mob
