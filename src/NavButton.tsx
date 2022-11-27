import React from 'react'

export interface NavButtonProps extends React.ComponentPropsWithoutRef<'a'> {
  children: string
}

const NavButton = ({children, ...rest}: NavButtonProps) => {
  return (
    <a className="group" {...rest}>
      {children.split('').map((char, charIndex) => (
        <span
          key={`${charIndex}_${char}`}
          className="relative inline-block rotate-12 text-2xl transition-transform duration-100 before:absolute before:left-0 before:right-0 before:bottom-0 before:h-0.5 before:bg-white group-hover:rotate-0"
        >
          {char}
        </span>
      ))}
    </a>
  )
}

export default NavButton
