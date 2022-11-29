import React, {useEffect, useRef, useState} from 'react'
import {Sound, sound} from '@pixi/sound'
import {useMounted} from './useMounted'

export interface BackgroundSoundProviderProps {
  children: React.ReactNode
}

const BackgroundSoundProvider = ({children}: BackgroundSoundProviderProps) => {
  useEffect(() => {
    const instance = sound.add('background', {
      url: '/background_sound.mp3',
      loop: true,
    })

    return () => {
      instance.destroy()
    }
  }, [])

  const play = () => {
    sound.stop('background')
    sound.play('background')
  }

  const stop = () => {
    sound.stop('background')
  }

  const pause = () => {
    sound.pause('background')
  }

  return (
    <BackgroundSoundContext.Provider
      value={{
        play,
        stop,
        pause,
      }}
    >
      {children}
    </BackgroundSoundContext.Provider>
  )
}

export interface BackgroundSoundContextProps {
  play: () => void
  stop: () => void
  pause: () => void
}

export const BackgroundSoundContext = React.createContext<BackgroundSoundContextProps | null>(null)

export const useBackgroundSound = () => {
  const context = React.useContext(BackgroundSoundContext)

  if (context === null) {
    throw new Error('useBackgroundSound must be used within a BackgroundSoundProvider')
  }

  return context
}

export default BackgroundSoundProvider
