import React, {useEffect, useRef, useState} from 'react'
import {useSpritesheet} from './useSpritesheet'
import {useKeyControl} from './useKeyControl'
import {useCamera} from './Camera'
import {Sprite, useTick} from '@inlet/react-pixi'
import {APP_HEIGHT, APP_WIDTH, PLAYER_SIZE} from './constants'
import {Resource, Texture} from 'pixi.js'
import {rectangularCollision} from './utils'
import {boundaries} from './Boundaries'
import {boundaryExceptions} from './BoundaryExceptions'
import {useAtom} from 'jotai'
import {playerAtom, selectedVideoIndexAtom} from './stores'
import {useStageSize} from '@src/StageSizeProvider'
import {videoTrigger} from '@src/VideoTrigger'

export type PlayerAnimationStatus = 'idle' | 'walk' | 'run'
export type PlayerDirection = 'up' | 'down' | 'left' | 'right'

export interface PlayerState {
  animationStatus: PlayerAnimationStatus
  direction: PlayerDirection
}

const getNextPosition = (
  position: {x: number; y: number},
  deltaVelocity: {x: number; y: number},
) => {
  let nextPosition = {
    x: position.x + deltaVelocity.x,
    y: position.y + deltaVelocity.y,
  }

  const isColliding =
    !boundaryExceptions.some((boundaryException) => {
      return rectangularCollision({
        rectangle1: {
          position: {
            x: nextPosition.x - PLAYER_SIZE.width / 2,
            y: nextPosition.y - PLAYER_SIZE.height,
          },
          ...PLAYER_SIZE,
        },
        rectangle2: {
          ...boundaryException,
        },
      })
    }) &&
    boundaries.some((boundary) => {
      return rectangularCollision({
        rectangle1: {
          position: {
            x: nextPosition.x - PLAYER_SIZE.width / 2,
            y: nextPosition.y - PLAYER_SIZE.height,
          },
          ...PLAYER_SIZE,
        },
        rectangle2: {
          ...boundary,
        },
      })
    })

  return isColliding ? null : nextPosition
}

const checkVideoTrigger = (
  position: {x: number; y: number},
  deltaVelocity: {x: number; y: number},
) => {
  let nextPosition = {
    x: position.x + deltaVelocity.x,
    y: position.y + deltaVelocity.y,
  }

  const collidingTrigger = videoTrigger.find((boundary) => {
    return rectangularCollision({
      rectangle1: {
        position: {
          x: nextPosition.x - PLAYER_SIZE.width / 2,
          y: nextPosition.y - PLAYER_SIZE.height,
        },
        ...PLAYER_SIZE,
      },
      rectangle2: {
        ...boundary,
      },
    })
  })

  return collidingTrigger ? collidingTrigger.videoId : undefined
}

export interface PlayerProps {
  isPlaying: boolean
}

export const Player = ({isPlaying}: PlayerProps) => {
  const prevWatchedVideoIndexRef = useRef<number>()
  const size = useStageSize()
  const [selectedVideoIndex, setSelectedVideoIndex] = useAtom(selectedVideoIndexAtom)
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
  const [player, setPlayer] = useAtom(playerAtom)
  const spritesMap: {[key in PlayerDirection]: Texture<Resource>[]} = {
    up: upSprites,
    down: downSprites,
    left: leftSprites,
    right: rightSprites,
  }

  const currentSprites = spritesMap[player.state.direction]
  const currentSprite = currentSprites[Math.floor(frame)]

  useTick((delta) => {
    if (!isPlaying) {
      return
    }

    if (player.state.animationStatus === 'idle') {
      return
    }

    let nextFrame = (frame + delta * 0.2) % currentSprites.length
    if (nextFrame >= currentSprites.length) {
      nextFrame = 0
    }
    setFrame(nextFrame)
  })

  useTick((delta) => {
    if (!isPlaying) {
      return
    }

    let velocity = {x: 0, y: 0}
    let direction = player.state.direction

    if (upKeyControl.isDown) {
      velocity.y -= 1
      direction = 'up'
    } else if (downKeyControl.isDown) {
      velocity.y += 1
      direction = 'down'
    } else if (leftKeyControl.isDown) {
      velocity.x -= 1
      direction = 'left'
    } else if (rightKeyControl.isDown) {
      velocity.x += 1
      direction = 'right'
    }

    const speed = 3
    const deltaVelocity = {
      x: velocity.x * speed * delta,
      y: velocity.y * speed * delta,
    }

    const nextPosition = getNextPosition(player.position, deltaVelocity)

    const check = checkVideoTrigger(player.position, deltaVelocity)

    if (prevWatchedVideoIndexRef.current === undefined && check !== undefined) {
      prevWatchedVideoIndexRef.current = check - 1
      setSelectedVideoIndex(check - 1)
    } else if (check === undefined) {
      prevWatchedVideoIndexRef.current = undefined
    }

    if (nextPosition) {
      setPlayer((prev) => ({
        ...prev,
        position: nextPosition,
      }))
      moveViewport(nextPosition)
      setPlayer((prev) => ({
        ...prev,
        state: {
          animationStatus: 'walk',
          direction,
        },
      }))
    }

    if (
      !upKeyControl.isDown &&
      !downKeyControl.isDown &&
      !leftKeyControl.isDown &&
      !rightKeyControl.isDown
    ) {
      setPlayer((prev) => ({
        ...prev,
        state: {
          ...prev.state,
          animationStatus: 'idle',
        },
      }))
    }
  })

  useEffect(() => {
    moveViewport({x: player.position.x, y: player.position.y})
  }, [])

  return (
    <>
      <Sprite
        texture={currentSprite}
        anchor={[0.5, 1]}
        scale={1.1}
        x={player.position.x - size.width / 2}
        y={player.position.y - size.height / 2}
        zIndex={2}
      />
    </>
  )
}
export default Player
