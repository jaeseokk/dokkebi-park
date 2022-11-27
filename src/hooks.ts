import {useCallback, useEffect, useRef} from 'react'

export const useDimensions = () => {
  const containerRef = useRef<HTMLDivElement>()
  const register = useCallback((node: HTMLDivElement) => {
    if (!node) {
      return
    }

    containerRef.current = node
  }, [])

  const getDimensions = useCallback(() => {
    if (!containerRef.current) {
      return
    }

    const {offsetWidth: width, offsetHeight: height} = containerRef.current
    return {width, height}
  }, [])

  return {getDimensions, register}
}
