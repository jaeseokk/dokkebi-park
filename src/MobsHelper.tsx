import React from 'react'

import styles from './MobsHelper.module.scss'
import {APP_HEIGHT, APP_WIDTH, OFFSET} from './constants'
import {useAtom} from 'jotai'
import {mobsConfigAtom} from './stores'
import produce from 'immer'
import {createPortal} from 'react-dom'
import {useUpdateHelperData} from './useUpdateHelperData'

export interface HelperData {
  enabled: boolean
  index: string | number
  scale: string | number
}

export interface MobsHelperProps {
  cursorPosition?: {x: number; y: number}
}

const MobsHelper = ({cursorPosition}: MobsHelperProps) => {
  const [helperData, setHelperData] = useUpdateHelperData()
  const [mobsConfig, setMobsConfig] = useAtom(mobsConfigAtom)

  const x = cursorPosition ? Math.round(cursorPosition.x + APP_WIDTH / 2 + OFFSET.x) : 0
  const y = cursorPosition ? Math.round(cursorPosition.y + APP_HEIGHT / 2 + OFFSET.y) : 0

  const handleRemove = () => {
    setMobsConfig(
      produce(mobsConfig, (draft) => {
        draft[helperData.index] = {
          position: {x: 0, y: 0},
          scale: 1,
        }
      }),
    )
  }

  const portalContainer = document.getElementById('helper_portal')

  if (!portalContainer) {
    return null
  }

  return createPortal(
    <div className={styles.container}>
      <label>
        enabled:{' '}
        <input
          type="checkbox"
          checked={helperData.enabled}
          onChange={(e) => {
            const value = e.target.checked

            setHelperData({
              enabled: value,
            })
          }}
        />
      </label>
      <label>
        index:{' '}
        <input
          type="number"
          value={helperData.index}
          onChange={(e) => {
            const value = e.target.value

            setHelperData({
              index: value,
            })
          }}
        />
      </label>
      <label>
        scale:{' '}
        <input
          type="number"
          inputMode="decimal"
          step={0.1}
          value={helperData.scale}
          onChange={(e) => {
            const value = e.target.value

            setHelperData({
              scale: value,
            })
          }}
        />
      </label>
      <button onClick={handleRemove}>remove</button>
      {cursorPosition && (
        <div className={styles.positionContainer}>
          {x}, {y}
        </div>
      )}
    </div>,
    portalContainer,
  )
}

export default MobsHelper
