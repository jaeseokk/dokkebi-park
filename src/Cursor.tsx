import React, {ComponentProps} from 'react'
import {Graphics} from '@inlet/react-pixi'

export interface CursorProps
  extends Pick<ComponentProps<typeof Graphics>, 'x' | 'y' | 'position' | 'zIndex'> {}

const Cursor = ({...rest}: CursorProps) => {
  const draw = React.useCallback((g) => {
    g.clear()
    g.lineStyle(4, 0x091eaa, 1)
    g.moveTo(-5, -25)
    g.lineTo(-25, -25)
    g.lineTo(-25, -5)
    g.moveTo(-25, 5)
    g.lineTo(-25, 25)
    g.lineTo(-5, 25)
    g.moveTo(5, 25)
    g.lineTo(25, 25)
    g.lineTo(25, 5)
    g.moveTo(25, -5)
    g.lineTo(25, -25)
    g.lineTo(5, -25)
  }, [])

  return <Graphics draw={draw} {...rest} />
}

export default Cursor
