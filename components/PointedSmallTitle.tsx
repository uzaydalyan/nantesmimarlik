import styles from '../styles/PointedSmallTitle.module.scss';

const PointedSmallTitle = ({ title, className = "" }: { title: string, className?: string }) => {
    
    
    return (
        <div className={className + " " + styles.main}>
            <div className={styles.circle}></div>
            <div className={styles.title}>{title}</div>
        </div>
    );
}
 
export default PointedSmallTitle;