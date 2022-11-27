import React, {useRef, useState} from 'react'
import {Sprite, useTick} from '@inlet/react-pixi'
import {APP_HEIGHT, APP_WIDTH, MOB_CONFIG_LIST, OFFSET} from './constants'
import {useMobsSpritesheet} from './useMobsSpritesheet'
import {useBreath} from './useBreath'
import {useAtom, useAtomValue} from 'jotai'
import {playerAtom} from './stores'
import {getDistance} from './utils'
import Cursor from './Cursor'
import {useKey} from 'react-use'

export interface MobsProps {
  onSelectMob: (mobIndex: number) => void
}

const Mobs = ({onSelectMob}: MobsProps) => {
  const sprites = useMobsSpritesheet({
    spritesheetUrls: ['/mob-sprites-0.png', '/mob-sprites-1.png', '/mob-sprites-2.png'],
    frameWidth: 200,
    frameHeight: 200,
  })
  const {breathScaleFactor} = useBreath()
  const player = useAtomValue(playerAtom)
  const isMouseInteractionProcessing = useRef(false)
  const [focussedMobIndex, setFocussedMobIndex] = useState<number>()
  const handleMouseOver = (mobIndex: number) => {
    isMouseInteractionProcessing.current = true
    setFocussedMobIndex(mobIndex)
  }
  const handleMouseOut = () => {
    isMouseInteractionProcessing.current = false
    setFocussedMobIndex(undefined)
  }

  useTick(() => {
    if (player.state.animationStatus === 'idle' && isMouseInteractionProcessing.current) {
      return
    }

    let nextFocussedIndex: number | undefined = undefined
    let minDistance: number = Infinity
    MOB_CONFIG_LIST.forEach((mobConfig, mobIndex) => {
      const offsetAppliedPlayerPosition = {
        x: player.position.x + OFFSET.x,
        y: player.position.y + OFFSET.y,
      }
      const {value: distance, directions} = getDistance(
        offsetAppliedPlayerPosition,
        mobConfig.position,
      )

      if (distance < 200 && directions.includes(player.state.direction) && minDistance > distance) {
        minDistance = distance
        nextFocussedIndex = mobIndex
      }
    })

    setFocussedMobIndex(nextFocussedIndex)
  })

  useKey(
    (e) => {
      return e.code === 'Space' || e.code === 'Enter'
    },
    (e) => {
      e.preventDefault()

      if (focussedMobIndex === undefined) {
        return
      }

      onSelectMob(focussedMobIndex)
    },
    undefined,
    [focussedMobIndex, onSelectMob],
  )

  return (
    <>
      {MOB_CONFIG_LIST.map((mobConfig, mobIndex) => {
        const textureTuple = sprites[mobIndex]
        const boundaryHeightScale =
          mobConfig.boundaryHeightScale || (mobConfig.scale && mobConfig.scale < 0.5 ? 1 : 0.5)
        const scale = (mobConfig.scale || 1) * breathScaleFactor

        if (boundaryHeightScale < 1) {
          return (
            <React.Fragment key={mobIndex}>
              <Sprite
                texture={textureTuple[0]}
                anchor={[0.5, 1]}
                scale={scale}
                x={mobConfig.position.x - APP_WIDTH / 2 - OFFSET.x}
                y={
                  mobConfig.position.y -
                  APP_HEIGHT / 2 -
                  OFFSET.y +
                  (textureTuple[0].height + textureTuple[1].height) *
                    (0.5 - boundaryHeightScale) *
                    scale
                }
                zIndex={3}
                interactive
                pointerdown={() => onSelectMob(mobIndex)}
                pointermove={() => {
                  handleMouseOver(mobIndex)
                }}
                pointerout={handleMouseOut}
              />
              <Sprite
                texture={textureTuple[1]}
                anchor={[0.5, 0]}
                scale={scale}
                x={mobConfig.position.x - APP_WIDTH / 2 - OFFSET.x}
                y={
                  mobConfig.position.y -
                  APP_HEIGHT / 2 -
                  OFFSET.y +
                  (textureTuple[0].height + textureTuple[1].height) *
                    (0.5 - boundaryHeightScale) *
                    scale
                }
                zIndex={1}
                interactive
                pointerdown={() => onSelectMob(mobIndex)}
                pointermove={() => {
                  handleMouseOver(mobIndex)
                }}
                pointerout={handleMouseOut}
              />
              {focussedMobIndex === mobIndex && (
                <Cursor
                  x={mobConfig.position.x - APP_WIDTH / 2 - OFFSET.x}
                  y={mobConfig.position.y - APP_HEIGHT / 2 - OFFSET.y}
                  zIndex={4}
                />
              )}
            </React.Fragment>
          )
        }

        return (
          <React.Fragment key={mobIndex}>
            <Sprite
              texture={textureTuple[1]}
              anchor={[0.5, 0.5]}
              scale={scale}
              x={mobConfig.position.x - APP_WIDTH / 2 - OFFSET.x}
              y={mobConfig.position.y - APP_HEIGHT / 2 - OFFSET.y}
              zIndex={1}
              interactive
              pointerdown={() => onSelectMob(mobIndex)}
              pointermove={() => {
                handleMouseOver(mobIndex)
              }}
              pointerout={handleMouseOut}
            />
            {focussedMobIndex === mobIndex && (
              <Cursor
                x={mobConfig.position.x - APP_WIDTH / 2 - OFFSET.x}
                y={mobConfig.position.y - APP_HEIGHT / 2 - OFFSET.y}
                zIndex={4}
              />
            )}
          </React.Fragment>
        )
      })}
    </>
  )
}

export default Mobs
