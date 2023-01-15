import React from 'react'
import ArchiveGrid from '@src/ArchiveGrid'

export interface ArchiveProps {}

const Archive = ({}: ArchiveProps) => {
  return (
    <div className="min-h-full bg-black pt-[8.25rem]">
      <div className="mx-auto max-w-[64rem]">
        <div className="relative">
          <ArchiveGrid />
        </div>
      </div>
    </div>
  )
}

export default Archive
