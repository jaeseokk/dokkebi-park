import styles from '../styles/Home.module.css'
import Head from 'next/head'
import dynamic from 'next/dynamic'

const App = dynamic(() => import('../src/App'), {ssr: false})

export interface PixiPageProps {}

const PixiPage = ({}: PixiPageProps) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dokkebi Park</title>
        <meta name="description" content="Dokkebi Park" />
      </Head>
      <main className={styles.main}>
        <App />
      </main>
      <div id="helper_portal" />
    </div>
  )
}

export default PixiPage
