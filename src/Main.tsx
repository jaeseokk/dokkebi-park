import React from 'react'
import dynamic from 'next/dynamic'
import WebUI from '@src/WebUI'

const App = dynamic(() => import('../src/App'), {ssr: false})

export interface MainProps {}

const Main = ({}: MainProps) => {
  return (
    <WebUI>
      <App />
    </WebUI>
  )
}

export default Main
