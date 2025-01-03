import TimeLine from '@/components/TimeLine';
import styles from './index.module.scss';

const HomePage = () => {
  return (
    <div className={styles['main-wrapper']}>
      <div className={styles['main-viewer']}>Viewer</div>
      <div className={styles['main-timeline']}>
        <TimeLine />
      </div>
    </div>
  );
};

export default HomePage;
