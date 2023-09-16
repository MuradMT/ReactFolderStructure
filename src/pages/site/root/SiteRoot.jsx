import Footer from "../../../components/site/Footer/Footer";
import Header from "../../../components/site/Header/Header";
import { Outlet } from "react-router-dom";

const SiteRoot = () => {
  return (
    <>
    
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default SiteRoot;
