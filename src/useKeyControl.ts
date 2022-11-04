import {useEffect} from 'react'
import {useSetState} from './useSetState'
import {useTick} from '@inlet/react-pixi'

export const useKeyControl = (keyCode: KeyboardEvent['key']) => {
  const [control, setControl] = useSetState({
    isDown: false,
    isUp: false,
    isPressed: false,
    isReleased: false,
  })

  useTick(() => {
    if (control.isPressed || control.isReleased) {
      setControl({
        isPressed: false,
        isReleased: false,
      })
    }
  })

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === keyCode) {
        e.preventDefault()
        setControl({
          isDown: true,
          isUp: false,
          isPressed: true,
        })
      }
    }
    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === keyCode) {
        e.preventDefault()
        setControl({
          isDown: false,
          isUp: true,
          isReleased: true,
        })
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('keyup', handleKeyUp)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('keyup', handleKeyUp)
    }
  }, [keyCode])

  return control
}
