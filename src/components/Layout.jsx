import Header from './Header';
import { Outlet } from 'react-router';

const Layout = () => {
  return (
    <>
      <Header />
      <main className="p-4">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
