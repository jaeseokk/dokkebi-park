import React, {useEffect, useReducer, useState} from 'react'
import {useSpritesheet} from './useSpritesheet'
import {useKeyControl} from './useKeyControl'
import {useCamera} from './Camera'
import {Sprite, useTick} from '@inlet/react-pixi'
import {APP_HEIGHT, APP_WIDTH} from './constants'
import {useSetState} from './useSetState'
import {Resource, Texture} from 'pixi.js'

export type PlayerAnimationStatus = 'idle' | 'walk' | 'run'
export type PlayerDirection = 'up' | 'down' | 'left' | 'right'

export interface PlayerState {
  animationStatus: PlayerAnimationStatus
  direction: PlayerDirection
}

export interface PlayerProps {}

export const Player = ({}: PlayerProps) => {
  const downSprites = useSpritesheet({
    spritesheetUrl: '/playerDown.png',
    frameWidth: 48,
    frameHeight: 80,
  })
  const upSprites = useSpritesheet({
    spritesheetUrl: '/playerUp.png',
    frameWidth: 48,
    frameHeight: 80,
  })
  const leftSprites = useSpritesheet({
    spritesheetUrl: '/playerLeft.png',
    frameWidth: 48,
    frameHeight: 80,
  })
  const rightSprites = useSpritesheet({
    spritesheetUrl: '/playerRight.png',
    frameWidth: 48,
    frameHeight: 80,
  })
  const [frame, setFrame] = useState(0)

  const upKeyControl = useKeyControl('ArrowUp')
  const downKeyControl = useKeyControl('ArrowDown')
  const leftKeyControl = useKeyControl('ArrowLeft')
  const rightKeyControl = useKeyControl('ArrowRight')
  const {moveViewport} = useCamera()
  const [position, setPosition] = useState({x: 0, y: 0})
  const [playerState, setPlayerState] = useSetState<PlayerState>({
    animationStatus: 'idle',
    direction: 'down',
  })

  const spritesMap: {[key in PlayerDirection]: Texture<Resource>[]} = {
    up: upSprites,
    down: downSprites,
    left: leftSprites,
    right: rightSprites,
  }

  const currentSprites = spritesMap[playerState.direction]
  const currentSprite = currentSprites[Math.floor(frame)]

  useTick((delta) => {
    if (playerState.animationStatus === 'idle') {
      return
    }

    let nextFrame = (frame + delta * 0.2) % currentSprites.length
    if (nextFrame >= currentSprites.length) {
      nextFrame = 0
    }
    setFrame(nextFrame)
  })

  useTick((delta) => {
    let velocity = {x: 0, y: 0}
    let direction = playerState.direction

    if (upKeyControl.isDown) {
      velocity.y -= 1
      direction = 'up'
    }
    if (downKeyControl.isDown) {
      velocity.y += 1
      direction = 'down'
    }
    if (leftKeyControl.isDown) {
      velocity.x -= 1
      direction = 'left'
    }
    if (rightKeyControl.isDown) {
      velocity.x += 1
      direction = 'right'
    }

    if (velocity.x !== 0 || velocity.y !== 0) {
      const speed = 2
      const deltaVelocity = {
        x: velocity.x * speed * delta,
        y: velocity.y * speed * delta,
      }
      const nextPosition = {
        x: position.x + deltaVelocity.x,
        y: position.y + deltaVelocity.y,
      }

      setPosition(nextPosition)
      moveViewport(nextPosition)
      setPlayerState({
        animationStatus: 'walk',
        direction,
      })
    }

    if (
      !upKeyControl.isDown &&
      !downKeyControl.isDown &&
      !leftKeyControl.isDown &&
      !rightKeyControl.isDown
    ) {
      setPlayerState({animationStatus: 'idle'})
    }
  })

  useEffect(() => {
    moveViewport({x: position.x, y: position.y})
  }, [])

  return (
    <Sprite
      texture={currentSprite}
      anchor={[0.5, 1]}
      scale={1}
      x={position.x - APP_WIDTH / 2}
      y={position.y - APP_HEIGHT / 2}
    />
  )
}
export default Player
