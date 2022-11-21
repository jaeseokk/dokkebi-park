import React from 'react'
import {Container, Sprite} from '@inlet/react-pixi'
import {useMultiPackedSpritesheet} from './useMultiPackedSpritesheet'
import {APP_HEIGHT, APP_WIDTH, MOB_CONFIG_LIST, OFFSET} from './constants'
import {useAtom, useAtomValue} from 'jotai'
import {mobsConfigAtom} from './stores'

export interface MobsProps {}

const Mobs = ({}: MobsProps) => {
  const sprites = useMultiPackedSpritesheet({
    spritesheetUrls: ['/mob-sprites-0.png', '/mob-sprites-1.png', '/mob-sprites-2.png'],
    frameWidth: 200,
    frameHeight: 200,
  })
  const mobsConfig = useAtomValue(mobsConfigAtom)

  return (
    <Container>
      {MOB_CONFIG_LIST.map((mobConfig, mobIndex) => (
        <Sprite
          key={mobIndex}
          texture={sprites[mobIndex]}
          anchor={0.5}
          scale={mobConfig.scale || 1}
          x={mobConfig.position.x}
          y={mobConfig.position.y}
        />
      ))}
    </Container>
  )
}

export default Mobs
