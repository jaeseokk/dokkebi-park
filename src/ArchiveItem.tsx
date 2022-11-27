import React from 'react'

export interface ArchiveItemProps {
  title: string
  desc: string
  colorIndex: number
}

const ArchiveItem = ({title, desc, colorIndex}: ArchiveItemProps) => {
  return (
    <div
      className="rounded-3xl py-[3.875rem] px-[2.375rem] text-black"
      style={{
        backgroundColor: `var(--archive-bg-${colorIndex})`,
      }}
    >
      <h2 className="mb-14 text-6xl underline">{title}</h2>
      <ul className="grid grid-cols-3 gap-4">
        <li className="aspect-[4/3] rounded-2xl bg-[#EAEAEA]">image</li>
        <li className="aspect-[4/3] rounded-2xl bg-[#EAEAEA]">image</li>
        <li className="aspect-[4/3] rounded-2xl bg-[#EAEAEA]">image</li>
        <li className="aspect-[4/3] rounded-2xl bg-[#EAEAEA]">image</li>
        <li className="aspect-[4/3] rounded-2xl bg-[#EAEAEA]">image</li>
        <li className="aspect-[4/3] rounded-2xl bg-[#EAEAEA]">image</li>
      </ul>
      <p className="mt-12 whitespace-pre-line">{desc}</p>
    </div>
  )
}

export default ArchiveItem
