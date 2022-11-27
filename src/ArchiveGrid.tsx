import React from 'react'
import DraggableGrid, {DraggableItem} from 'ruuri'
import {COLOR_SET, CONTENTS} from '@src/contents'
import Link from 'next/link'
import ArchiveItem from '@src/ArchiveItem'

const COLUMN_COUNT = 2
const GAP = 36

export interface ArchiveGridProps {
  containerWidth: number
}

const ArchiveGrid = ({containerWidth}: ArchiveGridProps) => {
  return (
    <div
      className="pb-56"
      style={{
        margin: -GAP / 2,
      }}
    >
      <DraggableGrid dragEnabled={false}>
        {CONTENTS.map(({title, desc}, itemIndex) => (
          <DraggableItem className="cursor-auto" key={itemIndex}>
            <div
              style={{
                width: containerWidth / COLUMN_COUNT - (GAP / 2) * (COLUMN_COUNT - 1),
                margin: GAP / 2,
              }}
            >
              <Link href={`/archive/${itemIndex}`} shallow>
                <a>
                  <ArchiveItem
                    title={title}
                    desc={desc}
                    colorIndex={itemIndex % COLOR_SET.length}
                  />
                </a>
              </Link>
            </div>
          </DraggableItem>
        ))}
      </DraggableGrid>
    </div>
  )
}

export default ArchiveGrid
