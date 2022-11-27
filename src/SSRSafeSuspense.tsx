import React, {Suspense, useEffect, useState} from 'react'

const useMounted = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return mounted
}

export interface SSRSafeSuspenseProps {}

const SSRSafeSuspense = (props: React.ComponentProps<typeof Suspense>) => {
  const isMounted = useMounted()

  if (isMounted) {
    return <Suspense {...props} />
  }
  return <>{props.fallback}</>
}

export default SSRSafeSuspense
