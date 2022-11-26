import * as PIXI from 'pixi.js'
import React, {useEffect, useState} from 'react'

export interface ResourceLoaderProps {
  children: React.ReactNode
  resources: string[]
  fallback?: React.ReactNode
}

const loader = PIXI.Loader.shared

const ResourceLoader = ({children, resources, fallback}: ResourceLoaderProps) => {
  const [isLoading, setIsLoading] = useState(true)
  const [isClicked, setIsClicked] = useState(false)

  useEffect(() => {
    resources.forEach((resource) => loader.add(resource))
    console.log('load')
    loader.load()
    loader.onComplete.add(() => setIsLoading(false))

    return () => {
      loader.reset()
    }
  }, [resources])

  if (isLoading) {
    return <>{fallback}</>
  }

  if (!isClicked) {
    return (
      <div
        style={{cursor: 'pointer'}}
        onClick={() => {
          setIsClicked(true)
        }}
      >
        click me
      </div>
    )
  }

  return <>{children}</>
}

export default ResourceLoader
