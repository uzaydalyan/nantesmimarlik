import styles from '../styles/ServiceCard.module.scss';
import Image from 'next/image';

const ServiceCard = ({className, title, description}: { className: string, title: string, description: string }) => {

    return ( 
        <div className={styles.main + " " + className}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{description}</p>
        </div>
     );
}
 
export default ServiceCard;