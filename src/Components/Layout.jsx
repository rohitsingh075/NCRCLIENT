// src/Components/Layout.jsx
import ScrollToTop from './ScrollToTop';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
};

export default Layout;
