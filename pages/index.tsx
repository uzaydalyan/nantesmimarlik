import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Navbar from '../components/Navbar'
import PointedSmallTitle from '../components/PointedSmallTitle'
import ServiceCard from '../components/ServiceCard'
import ProjectCard from '../components/ProjectCard'
import ContactCard from '../components/ContactCard'



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

        <div className={styles.about} id="about">
          <div className={styles.about_texts}>
            <PointedSmallTitle title='Hakkımızda' />
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

        <div className={styles.services}>
          <PointedSmallTitle title='Servislerimiz' />
          <h1 className={styles.services_title}>Hayalinizdeki en iyi çözümler için burdayız</h1>
          <div className={styles.services_cards}>
            <ServiceCard title='Mimarlık'
              className='service_card'
              iconUrl='https://firebasestorage.googleapis.com/v0/b/nantesmimarlik-1af03.appspot.com/o/first_project.svg?alt=media&token=3b7a4e04-3b7c-4cbf-8e0a-3209fc3d4859'
              description='Non diam pretium tristique augue placerat dolor. Accumsan nibh nunc, molestie volutpat ipsum, ultricies.'
            />

            <ServiceCard title='İç Mimarlık'
              className='service_card'
              iconUrl='https://firebasestorage.googleapis.com/v0/b/nantesmimarlik-1af03.appspot.com/o/second_project.svg?alt=media&token=bf7f63c0-ce93-46c0-9230-77a8f7d8cd36'
              description='Non diam pretium tristique augue placerat dolor. Accumsan nibh nunc, molestie volutpat ipsum, ultricies.'
            />

            <ServiceCard title='Cephe Tasarımı'
              className='service_card'
              iconUrl='https://firebasestorage.googleapis.com/v0/b/nantesmimarlik-1af03.appspot.com/o/third_project.svg?alt=media&token=7606a554-8756-4e58-8da9-bb40b9870a7a'
              description='Non diam pretium tristique augue placerat dolor. Accumsan nibh nunc, molestie volutpat ipsum, ultricies.'
            />

          </div>
        </div>

        <div className={styles.projects} id="projects">
          <PointedSmallTitle title='Projeler' />
          <h1 className={styles.projects_title}>Bazı örnek projeler..</h1>
          <div className={styles.projects_cards}>
            <ProjectCard imgSource={'https://firebasestorage.googleapis.com/v0/b/nantesmimarlik-1af03.appspot.com/o/project.png?alt=media&token=eb2a14bb-b468-455e-937b-8ca8f9950f11'}
              title={'Villa B'}
              description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam. Erat id laoreet posuere etiam morbi.'} />

            <ProjectCard imgSource={'https://firebasestorage.googleapis.com/v0/b/nantesmimarlik-1af03.appspot.com/o/project.png?alt=media&token=eb2a14bb-b468-455e-937b-8ca8f9950f11'}
              title={'Villa B'}
              description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam. Erat id laoreet posuere etiam morbi.'} />

            <ProjectCard imgSource={'https://firebasestorage.googleapis.com/v0/b/nantesmimarlik-1af03.appspot.com/o/project.png?alt=media&token=eb2a14bb-b468-455e-937b-8ca8f9950f11'}
              title={'Villa B'}
              description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam. Erat id laoreet posuere etiam morbi.'} />
          </div>
        </div>
        <div className={styles.contact_bg} id="contact">
          <ContactCard />
        </div>

      </main>


      <footer className={styles.footer}>
        <p>&copy; 2023 Nantes</p>
      </footer>
    </div>
  )
}

export default Home
