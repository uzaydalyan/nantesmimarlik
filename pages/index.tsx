import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Navbar from '../components/Navbar'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nantes Mimarlık</title>
        <meta name="description" content="Nantes Mimarlık" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main>
        <div className={styles.hero}>
          
        </div>
      </main>


      <footer className={styles.footer}>

      </footer>
    </div>
  )
}

export default Home
