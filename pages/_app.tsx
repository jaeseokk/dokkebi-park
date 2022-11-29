import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {ResizeObserver} from '@juggle/resize-observer'

import 'intersection-observer'

if (typeof window !== 'undefined' && !window.ResizeObserver) {
  window.ResizeObserver = ResizeObserver
}

function MyApp({Component, pageProps}: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
