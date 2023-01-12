import React, {forwardRef} from 'react'
import AngledText from '@src/AngledText'

export interface NavButtonProps extends React.ComponentPropsWithoutRef<'a'> {
  children: string
}

const NavButton = forwardRef<HTMLAnchorElement, NavButtonProps>(({children, ...rest}, ref) => {
  return (
    <a className="text-2xl" {...rest} ref={ref}>
      <AngledText color={'white'}>{children}</AngledText>
    </a>
  )
})

export default NavButton

NavButton.displayName = 'NavButton'
