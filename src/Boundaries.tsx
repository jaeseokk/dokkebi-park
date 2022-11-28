import React from 'react'
import collisionData from './collision.json'
import {
  COLLISION_SYMBOL,
  MOB_CONFIG_LIST,
  OFFSET,
  PLAYER_SIZE,
  TILE_MAP_ROW_SIZE,
  TILE_SIZE,
} from './constants'
import {Graphics} from '@inlet/react-pixi'
import {useStageSize} from '@src/StageSizeProvider'

const collisionsMap: number[][] = []
for (let i = 0; i < collisionData.length; i += TILE_MAP_ROW_SIZE) {
  collisionsMap.push(collisionData.slice(i, TILE_MAP_ROW_SIZE + i))
}

export interface BoundaryItem {
  position: {
    x: number
    y: number
  }
  width: number
  height: number
}

export const boundaries: BoundaryItem[] = []

collisionsMap.forEach((row, i) => {
  row.forEach((symbol, j) => {
    if (symbol === COLLISION_SYMBOL) {
      boundaries.push({
        position: {
          x: j * TILE_SIZE - OFFSET.x,
          y: i * TILE_SIZE - OFFSET.y,
        },
        width: TILE_SIZE,
        height: TILE_SIZE,
      })
    }
  })
})

MOB_CONFIG_LIST.forEach((mobConfig) => {
  const boundaryWidthScale = mobConfig.boundaryWidthScale || 0.8
  const boundaryHeightScale =
    mobConfig.boundaryHeightScale || (mobConfig.scale && mobConfig.scale < 0.5 ? 1 : 0.5)
  const scale = mobConfig.scale || 1
  const boundaryMarginBottom = mobConfig.boundaryMarginBottom || 0
  const boundaryHeightPadding = mobConfig.boundaryHeightPadding || 0
  const width = scale * 200 * boundaryWidthScale
  const height = scale * 200 * boundaryHeightScale - boundaryHeightPadding

  boundaries.push({
    position: {
      x: mobConfig.position.x - OFFSET.x - width / 2,
      y:
        mobConfig.position.y -
        OFFSET.y -
        height / 2 +
        height * (1 - boundaryHeightScale) -
        boundaryMarginBottom * scale,
    },
    width,
    height,
  })
})

export interface BoundariesProps {}

const Boundaries = ({}: BoundariesProps) => {
  return (
    <>
      {boundaries.map((boundary, boundaryIndex) => (
        <Boundary key={boundaryIndex} {...boundary} />
      ))}
    </>
  )
}

interface BoundaryProps {
  position: {x: number; y: number}
  width: number
  height: number
}

const Boundary = ({position, width, height}: BoundaryProps) => {
  const size = useStageSize()
  const draw = React.useCallback(
    (g) => {
      g.clear()
      g.beginFill(0xff700b, 0.5)
      g.drawRect(0, 0, width, height)
    },
    [height, width],
  )

  return (
    <Graphics
      draw={draw}
      position={{
        x: position.x - size.width / 2,
        y: position.y - size.height / 2,
      }}
    />
  )
}

export default Boundaries
