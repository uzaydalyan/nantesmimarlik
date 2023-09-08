import styles from '../styles/ProjectCard.module.scss';
import Image from 'next/image';

const ProjectCard = ({ imgSource, title, description }: { imgSource: string, title: string, description: string }) => {

    return (
        <div className={styles.main}>
            <div className={styles.image}>
                <Image src={imgSource} width={960} height={720} alt='Project' />
            </div>
            <div className={styles.texts}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.description}>{description}</p>
            </div>

        </div>
    );
}

export default ProjectCard;