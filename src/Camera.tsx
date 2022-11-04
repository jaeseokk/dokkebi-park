import React, {useRef} from 'react'
import {PixiComponent, useApp} from '@inlet/react-pixi'
import {Viewport as PixiViewport} from 'pixi-viewport'
import {useMounted} from './useMounted'

export interface CameraProps {
  children: React.ReactNode
}

const Camera = ({children}: CameraProps) => {
  const isMounted = useMounted()

  const app = useApp()
  const viewportRef = useRef<PixiViewport>(null)

  const moveViewport = ({x, y}: {x: number; y: number}) => {
    if (!viewportRef.current) {
      return
    }

    viewportRef.current.moveCenter(x, y)
  }

  if (isMounted) {
    return (
      <Viewport screenWidth={app.view.width} screenHeight={app.view.height} ref={viewportRef}>
        <CameraContext.Provider value={{viewport: viewportRef.current, moveViewport}}>
          {children}
        </CameraContext.Provider>
      </Viewport>
    )
  }

  return null
}

export interface CameraContextProps {
  viewport: PixiViewport | null
  moveViewport: ({x, y}: {x: number; y: number}) => void
}

export const CameraContext = React.createContext<CameraContextProps | null>(null)

export const useCamera = () => {
  const context = React.useContext(CameraContext)

  if (context === null) {
    throw new Error('useCamera must be used within a CameraProvider')
  }

  return context
}

interface ViewportProps {
  screenWidth: number
  screenHeight: number
  worldWidth?: number
  worldHeight?: number
  children: React.ReactNode
}

const Viewport = PixiComponent('Viewport', {
  create(props: ViewportProps) {
    const viewport = new PixiViewport({
      screenWidth: props.screenWidth,
      screenHeight: props.screenHeight,
      worldWidth: props.worldWidth,
      worldHeight: props.worldHeight,
    })

    return viewport
  },
})

export default Camera
