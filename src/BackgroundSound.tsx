import React, {useEffect, useRef, useState} from 'react'
import {Sound, sound} from '@pixi/sound'
import {useMounted} from './useMounted'

export interface BackgroundSoundProps {
  children: React.ReactNode
}

const BackgroundSound = ({children}: BackgroundSoundProps) => {
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

  return (
    <BackgroundSoundContext.Provider
      value={{
        play,
        stop,
      }}
    >
      {children}
    </BackgroundSoundContext.Provider>
  )
}

export interface BackgroundSoundContextProps {
  play: () => void
  stop: () => void
}

export const BackgroundSoundContext = React.createContext<BackgroundSoundContextProps | null>(null)

export const useBackgroundSound = () => {
  const context = React.useContext(BackgroundSoundContext)

  if (context === null) {
    throw new Error('useBackgroundSound must be used within a BackgroundSoundProvider')
  }

  return context
}

export default BackgroundSound
