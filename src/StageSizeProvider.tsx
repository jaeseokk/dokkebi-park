import * as PIXI from 'pixi.js'
import React, {createContext, useContext, useEffect} from 'react'

PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST

const getScreenSize = () => ({
  width: window.innerWidth,
  height: window.innerHeight,
})

export interface StageSizeProviderProps {
  children: React.ReactNode
}

export const StageSizeProvider = ({children}: StageSizeProviderProps) => {
  const [size, setSize] = React.useState(getScreenSize())

  useEffect(() => {
    const onResize = () => setSize(getScreenSize())
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return <StageSizeContext.Provider value={size}>{children}</StageSizeContext.Provider>
}

export interface StageSizeContextProps {
  width: number
  height: number
}

export const StageSizeContext = createContext<StageSizeContextProps | null>(null)

export const useStageSize = () => {
  const context = useContext(StageSizeContext)

  if (context === null) {
    throw new Error('useStageSize must be used within a StageSizeProvider')
  }

  return context
}
