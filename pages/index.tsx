import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Navbar from '../components/Navbar'
import PointedSmallTitle from '../components/PointedSmallTitle'
import ServiceCard from '../components/ServiceCard'
import ProjectCard from '../components/ProjectCard'
import ContactCard from '../components/ContactCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



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
          <div className={styles.image}>
            <Image alt="Nantes Mimarlık" src="https://firebasestorage.googleapis.com/v0/b/nantesmimarlik-1af03.appspot.com/o/banner_image.png?alt=media&token=0a4e18a6-b9d0-44af-98fd-48fa0d074fb0" width={1440} height={640} />
          </div>
          <div className={styles.hero_texts}>
            <h1 className={styles.title}>Yaşam Alanlarınızda Fonksiyonel ve Estetik Çözümler</h1>
            <p className={styles.description}>Nantes Mimarlık olarak, fonksiyonel ve estetik tasarımlarımızla müşterilerimizin hayallerini gerçeğe dönüştürmek için varız.</p>
          </div>
        </div>

        <div className={styles.about} id="about">
          <div className={styles.about_texts}>
            <PointedSmallTitle title='Hakkımızda' />
            <h1 className={styles.about_title}>Bizi Anlatan 3 Değer:<br/><h2><br/>Güven & Konfor  & Estetik</h2></h1>
            <p className={styles.about_description}>Mimar Tolga Bayramoğlu önderliğinde kurulan markamız; Mimarlık, İç Mimarlık, İnşaat, Cephe Tasarımı alanlarında hizmet vermektedir.
              Tolga Bayramoğlu, 2022 yılında Bahçeşehir Üniversitesi Mimarlık Fakültesi İngilizce Program’dan mezun olmuştur. Yüksek konut projelerinde şantiye alanında, özel konut ve ofis projelerinde iç mimarlık uygulamaları alanında deneyime sahip olması ile beraber mermer, kaplama ve doğal taş uygulamaları alanında da çalışmıştır.
              Sektörde kazandığı deneyimleri uygulamak adına Hatay ve İstanbul’da hizmet vermektedir.<br /><br />NANTES Mimarlık, fonksiyonel ve estetik tasarımlarımızla müşterilerimizin hayallerini gerçeğe dönüştürmek için varız. Mimari tasarımın gücünü kullanarak, insanların yaşam alanlarındaki deneyimlerini zenginleştirmek, toplumumuza katkıda bulunmak ve çevreye saygı göstermek için çalışıyoruz.</p>
          </div>
          <div className={styles.about_images}>
            <div className={styles.about_image1}>
              <Image alt="Nantes Mimarlık" src="https://firebasestorage.googleapis.com/v0/b/nantesmimarlik-1af03.appspot.com/o/about_1.png?alt=media&token=2f2c8e2e-c056-4949-ac66-59344729a916" width={280} height={480} />
            </div>
            <div className={styles.about_image2}>
              <Image alt="Nantes Mimarlık" src="https://firebasestorage.googleapis.com/v0/b/nantesmimarlik-1af03.appspot.com/o/about_2.png?alt=media&token=e2c412e0-9160-4f73-85e2-971805abf192" width={280} height={480} />
            </div>
          </div>

        </div>

        <div className={styles.services}>
          <PointedSmallTitle title='Servislerimiz' />
          <h1 className={styles.services_title}>Hayalinizdeki en iyi çözümler için burdayız</h1>
          <div className={styles.services_cards + " services_swiper_parent"}>
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              pagination={{ clickable: true }}
              spaceBetween={50}
              slidesPerView={1}

              breakpoints={{
                688: {
                  slidesPerView: 2,
                },
                1216: {
                  slidesPerView: 3,
                }
              }}
            >
              <SwiperSlide>
                <ServiceCard title='Mimarlık'
                  className='service_card'
                  description='Non diam pretium tristique augue placerat dolor. Accumsan nibh nunc, molestie volutpat ipsum, ultricies.'
                /></SwiperSlide>


              <SwiperSlide>
                <ServiceCard title='İç Mimarlık'
                  className='service_card'
                  description='Non diam pretium tristique augue placerat dolor. Accumsan nibh nunc, molestie volutpat ipsum, ultricies.'
                /></SwiperSlide>

              <SwiperSlide>
                <ServiceCard title='Çelik Konstriksiyon'
                  className='service_card'
                  description='Non diam pretium tristique augue placerat dolor. Accumsan nibh nunc, molestie volutpat ipsum, ultricies.'
                /></SwiperSlide>

              <SwiperSlide>
                <ServiceCard title='Prefabrik Uygulamaları'
                  className='service_card'
                  description='Non diam pretium tristique augue placerat dolor. Accumsan nibh nunc, molestie volutpat ipsum, ultricies.'
                /></SwiperSlide>

              <SwiperSlide>
                <ServiceCard title='Render 3D Görselleştirme'
                  className='service_card'
                  description='Non diam pretium tristique augue placerat dolor. Accumsan nibh nunc, molestie volutpat ipsum, ultricies.'
                /></SwiperSlide>
            </Swiper>

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
