// src/Components/Layout.jsx
import ScrollToTop from './ScrollToTop';
import { Outlet } from 'react-router-dom';
import NavigationHandler from '../navigationHandler';
const Layout = () => {
  return (
    <>
    <NavigationHandler/>
      <ScrollToTop />
      <Outlet />
    </>
  );
};

export default Layout;
