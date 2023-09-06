import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import PointedSmallTitle from '../components/PointedSmallTitle'


const Home: NextPage = () => {

  return (
    <div className={styles.container}>
      <Head>
        <title>Nantes Mimarlık</title>
        <meta name="description" content="Nantes Mimarlık" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={styles.hero_texts}>
            <h1 className={styles.title}>Bir slogan gibi bir şey gelebilir</h1>
            <p className={styles.description}>açıklamaaçıklamaaçıklamaa çıklamaa çıklamaaçıklamaaçıklamaaçık lamaaçıklamaaçıkla maaçıklamaaçıklam aaçıklamaaç ıklamaaçıkla maaçıklama</p>
          </div>
          <div className={styles.image}>
            <Image alt="Nantes Mimarlık" src="https://firebasestorage.googleapis.com/v0/b/nantesmimarlik-1af03.appspot.com/o/hero_image.png?alt=media&token=f3a67f3b-1bf6-41a0-8369-fdc61b9d0530" width={1440} height={640} />
          </div>
        </div>

        <div className={styles.about}>
          <div className={styles.about_texts}>
            <PointedSmallTitle title='Hakkımızda' className={styles.about_pointed_title} />
            <h1 className={styles.about_title}>Hayalinizi gerçeğe dönüştürüyoruz</h1>
            <p className={styles.about_description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam. Erat id laoreet posuere etiam morbi.<br /><br />Tempor dolor elementum tellus non ipsum faucibus. Justo, magna mauris posuere auctor justo. Habitant proin aliquet volutpat leo ultricies. Dui blandit eget vitae turpis ultrices aliquet nunc. Faucibus sit odio bibendum lobortis diam.</p>
          </div>
          <div className={styles.about_images}>
            <div className={styles.about_image1}>
              <Image alt="Nantes Mimarlık" src="https://firebasestorage.googleapis.com/v0/b/nantesmimarlik-1af03.appspot.com/o/home_about_1.png?alt=media&token=f342da76-96a6-4f72-a925-0a7eb5099248" width={280} height={480} />
            </div>
            <div className={styles.about_image2}>
              <Image alt="Nantes Mimarlık" src="https://firebasestorage.googleapis.com/v0/b/nantesmimarlik-1af03.appspot.com/o/home_about_2.png?alt=media&token=e12dc0ed-1651-4321-a021-e65b3e6c364a" width={280} height={480} />
            </div>
          </div>

        </div>

      </main>


      <footer className={styles.footer}>

      </footer>
    </div>
  )
}

export default Home
