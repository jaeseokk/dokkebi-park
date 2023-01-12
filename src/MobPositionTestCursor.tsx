import React from 'react'
import {Sprite} from '@inlet/react-pixi'
import {useMultiPackedSpritesheet} from './useMultiPackedSpritesheet'
import {HelperData} from './MobsHelper'
import {useAtom, useAtomValue} from 'jotai'
import {helperDataAtom} from '@src/stores'
import {MOBS_SPRITESHEET_URLS, OFFSET} from '@src/constants'
import {useStageSize} from '@src/StageSizeProvider'

export interface MobPositionCursorProps {}

const MobPositionTestCursor = ({}: MobPositionCursorProps) => {
  const helperData = useAtomValue(helperDataAtom)
  const size = useStageSize()
  const sprites = useMultiPackedSpritesheet({
    spritesheetUrls: MOBS_SPRITESHEET_URLS,
    frameWidth: 400,
    frameHeight: 400,
  })
  const cursorPosition = helperData.cursorPosition

  if (!helperData.enabled || !cursorPosition) {
    return null
  }

  const scale = (Number(helperData.scale) || 1) * 0.5

  return (
    <Sprite
      texture={sprites[Number(helperData.index) || 0]}
      anchor={0.5}
      scale={scale}
      x={cursorPosition.x - size.width / 2 - OFFSET.x}
      y={cursorPosition.y - size.height / 2 - OFFSET.y}
    />
  )
}

export default MobPositionTestCursor
