import React from 'react'

const BACKGROUND_SET = {
  God: 'linear-gradient(0deg, #dbdbdb 0%, rgba(255,255,255,1) 90%)',
  Ghost: 'linear-gradient(0deg, #ff396a 0%, rgba(255,255,255,1) 90%)',
  Monster: 'linear-gradient(0deg, rgba(67,255,64,1) 0%, rgba(255,255,255,1) 90%)',
  Stone: 'linear-gradient(0deg, #525252 0%, rgba(255,255,255,1) 90%)',
  Animal: 'linear-gradient(0deg, #3e5dff 0%, rgba(255,255,255,1) 90%)',
  Object: 'linear-gradient(0deg, #ffe141 0%, rgba(255,255,255,1) 90%)',
  Castle: 'linear-gradient(0deg, #ff3ad9 0%, rgba(255,255,255,1) 90%)',
  Tower: 'linear-gradient(0deg, #ffb03f 0%, rgba(255,255,255,1) 90%)',
  Plants: 'linear-gradient(0deg, #3af3ff 0%, rgba(255,255,255,1) 90%)',
}

export interface MobInfoBadgeProps {
  children: React.ReactNode
  size?: 'small' | 'large'
  group: string
}

const MobInfoBadge = ({children, size = 'large', group, ...rest}: MobInfoBadgeProps) => {
  return (
    <div
      className={`h-30 inline-block ${
        size === 'large' ? 'text-stroke-lg py-2 text-5xl' : 'text-stroke-sm py-1 text-3xl'
      } rounded-[3.125rem] border-4 border-black px-5  font-bold`}
      style={{
        background: BACKGROUND_SET[group] || 'white',
      }}
      {...rest}
    >
      {children}
    </div>
  )
}

export default MobInfoBadge
