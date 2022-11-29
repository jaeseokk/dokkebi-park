import React from 'react'
import {OFFSET, TILE_MAP_ROW_SIZE, TILE_SIZE} from './constants'
import {Graphics} from '@inlet/react-pixi'
import {useStageSize} from '@src/StageSizeProvider'
import videoTriggerData from '@src/video_trigger.json'

const videoTriggerMap: number[][] = []
for (let i = 0; i < videoTriggerData.length; i += TILE_MAP_ROW_SIZE) {
  videoTriggerMap.push(videoTriggerData.slice(i, TILE_MAP_ROW_SIZE + i))
}

interface VideoTriggerItem {
  position: {
    x: number
    y: number
  }
  width: number
  height: number
  videoId: number
}

export const videoTrigger: VideoTriggerItem[] = []

videoTriggerMap.forEach((row, i) => {
  row.forEach((symbol, j) => {
    if (symbol > 0) {
      videoTrigger.push({
        position: {
          x: j * TILE_SIZE - OFFSET.x,
          y: i * TILE_SIZE - OFFSET.y,
        },
        width: TILE_SIZE,
        height: TILE_SIZE,
        videoId: symbol,
      })
    }
  })
})

export interface VideoTriggerProps {}

const VideoTrigger = ({}: VideoTriggerProps) => {
  return (
    <>
      {videoTrigger.map((boundary, boundaryIndex) => (
        <VideoTriggerTile key={boundaryIndex} {...boundary} />
      ))}
    </>
  )
}

interface VideoTriggerTileProps {
  position: {x: number; y: number}
  width: number
  height: number
}

const VideoTriggerTile = ({position, width, height}: VideoTriggerTileProps) => {
  const size = useStageSize()
  const draw = React.useCallback(
    (g) => {
      g.clear()
      g.beginFill(0x3c00ff, 0.5)
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

export default VideoTrigger
