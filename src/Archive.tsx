import React, {useState} from 'react'
import useResizeObserver from 'use-resize-observer'
import SSRSafeSuspense from '@src/SSRSafeSuspense'

const ArchiveGrid = React.lazy(() => import('@src/ArchiveGrid'))

export interface ArchiveProps {}

const Archive = ({}: ArchiveProps) => {
  const [gridContainerWidth, setGridContainerWidth] = useState(0)
  const {ref} = useResizeObserver({
    onResize: ({width}) => {
      if (!width) {
        return
      }
      setGridContainerWidth(width)
    },
  })

  return (
    <div className="min-h-full bg-black pt-[8.25rem]">
      <div className="mx-auto max-w-[64rem]">
        <div className="relative" ref={ref}>
          <SSRSafeSuspense fallback={null}>
            <ArchiveGrid containerWidth={gridContainerWidth} />
          </SSRSafeSuspense>
        </div>
      </div>
    </div>
  )
}

export default Archive
