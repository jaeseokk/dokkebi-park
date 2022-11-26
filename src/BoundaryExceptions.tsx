import React from 'react'
import collisionData from './collision.json'
import {
  APP_HEIGHT,
  APP_WIDTH,
  BOUNDARY_EXCEPTION_CONFIG_LIST,
  COLLISION_SYMBOL,
  MOB_CONFIG_LIST,
  OFFSET,
  PLAYER_SIZE,
  TILE_MAP_ROW_SIZE,
  TILE_SIZE,
} from './constants'
import {Graphics} from '@inlet/react-pixi'

interface BoundaryExceptionItem {
  position: {
    x: number
    y: number
  }
  width: number
  height: number
}

export const boundaryExceptions: BoundaryExceptionItem[] = []

BOUNDARY_EXCEPTION_CONFIG_LIST.forEach((boundaryException) => {
  boundaryExceptions.push({
    position: {
      x: boundaryException.position.x - OFFSET.x - boundaryException.width / 2,
      y: boundaryException.position.y - OFFSET.y - boundaryException.height / 2,
    },
    width: boundaryException.width,
    height: boundaryException.height,
  })
})

export interface BoundaryExceptionsProps {}

const BoundaryExceptions = ({}: BoundaryExceptionsProps) => {
  return (
    <>
      {boundaryExceptions.map((boundary, boundaryIndex) => (
        <BoundaryException key={boundaryIndex} {...boundary} />
      ))}
    </>
  )
}

interface BoundaryExceptionProps {
  position: {x: number; y: number}
  width: number
  height: number
}

const BoundaryException = ({position, width, height}: BoundaryExceptionProps) => {
  const draw = React.useCallback(
    (g) => {
      g.clear()
      g.beginFill(0x091eaa, 0.5)
      g.drawRect(0, 0, width, height)
    },
    [height, width],
  )

  return (
    <Graphics
      draw={draw}
      position={{
        x: position.x - APP_WIDTH / 2,
        y: position.y - APP_HEIGHT / 2,
      }}
    />
  )
}

export default BoundaryExceptions
