import {useRef, useState} from 'react'
import {useTick} from '@inlet/react-pixi'

export const useBreath = () => {
  const [breathScaleFactor, setBreathScaleFactor] = useState(1)
  const deltaAccRef = useRef(0)
  useTick((delta) => {
    deltaAccRef.current += delta

    setBreathScaleFactor(Math.cos((deltaAccRef.current * 0.1) / Math.PI) * 0.05 + 1.1)

    if (deltaAccRef.current > 200) {
      deltaAccRef.current = 0
    }
  })

  return {breathScaleFactor}
}
