import Header from '@/components/Header';
import styles from './index.module.scss';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles['app-wrapper']}>
      <Header />
      <div className={styles['app-main']}>{children}</div>
    </div>
  );
};

export default Layout;
