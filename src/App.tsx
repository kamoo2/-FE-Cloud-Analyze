import { RouterProvider } from 'react-router';
import styles from './App.module.scss';
import router from '@/routes';

function App() {
  return (
    <div className={styles['app']}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
