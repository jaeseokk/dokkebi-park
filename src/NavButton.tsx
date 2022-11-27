import React from 'react'

export interface NavButtonProps {
  children: string
}

const NavButton = ({children}: NavButtonProps) => {
  return (
    <button className="group">
      {children.split('').map((char, charIndex) => (
        <span
          key={`${charIndex}_${char}`}
          className="relative inline-block rotate-12 text-2xl transition-transform duration-100 before:absolute before:left-0 before:right-0 before:bottom-0 before:h-0.5 before:bg-white group-hover:rotate-0"
        >
          {char}
        </span>
      ))}
    </button>
  )
}

export default NavButton
