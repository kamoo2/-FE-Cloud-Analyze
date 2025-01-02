import Layout from '@/pages/Layout';
import LoginPage from '@/pages/Login';
import NotFound from '@/pages/NotFound';
import HomePage from '@/pages/Home';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import Header from '@/components/Header';

// 중첩 라우트 구조로 Router 설계
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <Layout>
          <Outlet />
        </Layout>
      </>
    ),
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
    ],
  },
]);

export default router;
