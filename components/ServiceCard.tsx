import styles from '../styles/ServiceCard.module.scss';
import Image from 'next/image';

const ServiceCard = ({className, iconUrl, title, description}: { className: string, iconUrl: string, title: string, description: string }) => {
    return ( 
        <div className={styles.main + " " + className}>
            <div className={styles.image}><Image src={iconUrl} width={40} height={40} alt='project'/></div>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{description}</p>
        </div>
     );
}
 
export default ServiceCard;