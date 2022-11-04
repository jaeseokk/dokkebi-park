import React, {useRef, useState} from 'react'
import {Sprite, useTick} from '@inlet/react-pixi'
import {useMultiPackedSpritesheet} from './useMultiPackedSpritesheet'
import {APP_HEIGHT, APP_WIDTH, MobConfig, OFFSET} from './constants'

export interface MobProps {
  id: number
  mobConfig: MobConfig
}
const scales = [1, 1.05]

const Mob = ({id, mobConfig: {position, scale = 1}}: MobProps) => {
  const sprites = useMultiPackedSpritesheet({
    spritesheetUrls: ['/mob-sprites-0.png', '/mob-sprites-1.png', '/mob-sprites-2.png'],
    frameWidth: 200,
    frameHeight: 200,
  })
  const {sequence} = useMobAnimation()

  return (
    <Sprite
      texture={sprites[id]}
      anchor={[0.5, 0.9]}
      scale={scale * scales[sequence]}
      x={position.x * 36.55 - APP_WIDTH / 2 - OFFSET.x}
      y={position.y * 36.38 - APP_HEIGHT / 2 - OFFSET.y}
    />
  )
}

const useMobAnimation = () => {
  const [sequence, setSequence] = useState(0)
  const accDelta = useRef(0)
  useTick((delta) => {
    accDelta.current += delta

    if (accDelta.current > 30) {
      accDelta.current = 0
      const next = (sequence + 1) % scales.length
      setSequence(next)
    }
  })

  return {
    sequence,
  }
}

export default Mob
