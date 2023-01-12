import React from 'react'
import {COLOR_SET, CONTENTS} from '@src/contents'
import Link from 'next/link'
import ArchiveItem from '@src/ArchiveItem'
import Masonry from 'react-masonry-css'

const COLUMN_COUNT = 3
const GAP = 36

export interface ArchiveGridProps {
  containerWidth: number
}

const ArchiveGrid = ({containerWidth}: ArchiveGridProps) => {
  return (
    <div className="pb-56">
      <Masonry
        breakpointCols={3}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {CONTENTS.map(({title, desc, images}, itemIndex) => (
          <div key={itemIndex}>
            <Link href={`/archive/${itemIndex}`} shallow>
              <a>
                <ArchiveItem
                  title={title}
                  desc={desc}
                  images={images}
                  colorIndex={itemIndex % COLOR_SET.length}
                />
              </a>
            </Link>
          </div>
        ))}
      </Masonry>
    </div>
  )
}

export default ArchiveGrid
