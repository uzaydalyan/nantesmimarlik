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
        <title>Nantes Mimarlık | Mimarlık Hizmeti | Hatay Mimarlık</title>
        <meta name="description" content="Antakya Hatay'da bulunan firmamız, her türlü mimarlık ihtiyacınız için hizmet vermektedir. Modern tasarım, inşaat yönetimi ve daha fazlası için bize ulaşın." />
        <meta name="keywords" content="Antakya, Hatay, Mimarlık, Mimarlık Hizmetleri, İnşaat Yönetimi, Mimarlık Tasarımı, İç Mekan Tasarımı, Proje Danışmanlığı, İnşaat, Cephe Tasarımı, Prefabrik Uygulamaları, Render, 3D Görselleştirme" />
        <meta name="geo.placename" content="Antakya, Hatay, İstanbul, Türkiye" />
        <meta name="service.focus" content="İç ve Dış Mekan Mimarlık Hizmeti" />
        <meta name="contact.phone" content="+90 532 120 12 01" />
        <meta name="contact.email" content="nantesmimarlik@gmail.com" />
        <meta name="usp" content="Deneyimli ve Profesyonel Mimarlık Hizmetleri" />
        <meta name="google-site-verification" content="MbFCGB-AsuNETNB3-noVw0yoOiygbxOJ0kBmARZN9sM" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={styles.image}>
            <Image alt="Nantes Mimarlık" src="https://firebasestorage.googleapis.com/v0/b/nantesmimarlik-1af03.appspot.com/o/banner_image_new.png?alt=media&token=8386b947-e21f-4eea-aea9-b21c89de6166" width={1440} height={640} />
          </div>
          <div className={styles.hero_texts}>
            <h1 className={styles.title}>Yaşam Alanlarınızda Fonksiyonel ve Estetik Çözümler</h1>
            <p className={styles.description}>Nantes Mimarlık olarak, fonksiyonel ve estetik tasarımlarımızla müşterilerimizin hayallerini gerçeğe dönüştürmek için varız.</p>
          </div>
        </div>

        <div className={styles.about} id="about">
          <div className={styles.about_texts}>
            <PointedSmallTitle title='Hakkımızda' />
            <div className={styles.about_title}>Bizi Anlatan 3 Değer:<br /><h2><br />Güven & Konfor  & Estetik</h2></div>
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
                  description='Hayallerinizi gerçeğe dönüştürmek için profesyonel mimarlık hizmetleri'
                /></SwiperSlide>


              <SwiperSlide>
                <ServiceCard title='İç Mimarlık'
                  className='service_card'
                  description='İç mekanlarınızda estetik ve işlevselliği optimize eden tasarım dokunuşları'
                /></SwiperSlide>

              <SwiperSlide>
                <ServiceCard title='İnşaat & Cephe Tasarımı'
                  className='service_card'
                  description='Binaların dış görünüşünü ve cephe malzemelerini planlama, tasarlama hizmetleri'
                /></SwiperSlide>

              <SwiperSlide>
                <ServiceCard title='Çelik Konstrüksiyon'
                  className='service_card'
                  description='Çelik yapı malzemesi ile güvenilir dayanıklılık ve estetiğin birleşimi'
                /></SwiperSlide>

              <SwiperSlide>
                <ServiceCard title='Prefabrik Uygulamaları'
                  className='service_card'
                  description='Hızlı, ekonomik ve çevre dostu prefabrik yapı çözümleri'
                /></SwiperSlide>

              <SwiperSlide>
                <ServiceCard title='Render (3D Görselleştirme)'
                  className='service_card'
                  description='Bilgisayar destekli tasarım programları kullanarak 3D modelleme hizmetleri'
                /></SwiperSlide>
            </Swiper>

          </div>
        </div>

        <div className={styles.projects} id="projects">
          <PointedSmallTitle title='Projeler' />
          <h1 className={styles.projects_title}>Projelerimiz</h1>
          <div className={styles.projects_cards}>
            <ProjectCard imgSource={'https://firebasestorage.googleapis.com/v0/b/nantesmimarlik-1af03.appspot.com/o/besiktas_residence.png?alt=media&token=bab2aff4-54f8-49b6-b137-257bfca24e20'}
              title={'Beşiktaş Residence'}
              description={'Modern tasarım anlayışıyla inşa edilen rezidans dairemiz, lüksü ve konforu bir araya getiriyor.'} />

            <ProjectCard imgSource={'https://firebasestorage.googleapis.com/v0/b/nantesmimarlik-1af03.appspot.com/o/mustakil.png?alt=media&token=04241852-e0fe-47aa-a286-34c6bafd9883'}
              title={'Müstakil Ev'}
              description={'Konfor ve sessizliği aynı anda sunan müstakil ev konseptimiz, sizlere rüya gibi bir yaşamın kapılarını aralıyor.'} />

            <ProjectCard imgSource={'https://firebasestorage.googleapis.com/v0/b/nantesmimarlik-1af03.appspot.com/o/icmekan.png?alt=media&token=4a809333-15fb-4ecc-8bff-dea30513bd4e'}
              title={'İç Mekan'}
              description={'Geniş iç ve dış mekanlarımız, modern tasarım anlayışı ve benzersiz detaylarla dolu. Villa yaşamının tadını çıkarın.'} />
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
