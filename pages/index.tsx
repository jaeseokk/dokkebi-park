import Head from 'next/head'
import dynamic from 'next/dynamic'
import Main from '../src/Main'

export interface PixiPageProps {}

const PixiPage = ({}: PixiPageProps) => {
  return (
    <>
      <Head>
        <title>Dokkebi Park</title>
        <meta name="description" content="Dokkebi Park" />
      </Head>
      <Main />
      <div id="helper_portal" />
    </>
  )
}

export default PixiPage
