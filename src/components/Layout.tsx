import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  const { pathname } = useLocation();

  return (
    <>
      <Header />
      <div key={pathname} className="page-transition">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
