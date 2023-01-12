import React, {CSSProperties} from 'react'

export interface AngledTextProps {
  children: string
  color?: CSSProperties['color']
}

const AngledText = ({children, color = 'black'}: AngledTextProps) => {
  return (
    <span className="group">
      {children.split('').map((char, charIndex) => (
        <span
          key={`${charIndex}_${char}`}
          className="relative inline-block rotate-12 transition-transform duration-100 group-hover:rotate-0"
        >
          {char}
          <span
            className="absolute left-0 right-0 bottom-0 h-0.5"
            style={{
              backgroundColor: color,
            }}
          />
        </span>
      ))}
    </span>
  )
}

export default AngledText
