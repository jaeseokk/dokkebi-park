import {useInView} from 'react-intersection-observer'
import {useEffect} from 'react'

export interface ImpressionTrackerProps {
  triggerOnce?: boolean
  threshold?: number | number[]
  onView?(): void
  onChange?(inView: boolean): void
}
export const ImpressionTracker = ({
  onView,
  onChange,
  triggerOnce = false,
  threshold,
  ...rest
}: ImpressionTrackerProps) => {
  const [ref, inView] = useInView({trackVisibility: true, delay: 100, triggerOnce, threshold})

  useEffect(() => {
    onChange && onChange(inView)
    inView && onView && onView()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView])

  return <span className="h-0 w-0" ref={ref} {...rest} />
}
