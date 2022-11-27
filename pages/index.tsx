import Head from 'next/head'
import Main from '../src/Main'

export interface IndexPageProps {}

const IndexPage = ({}: IndexPageProps) => {
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

export default IndexPage
