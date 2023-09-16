import Footer from "../../../components/admin/Footer/Footer";
import Header from "../../../components/admin/Header/Header";
import { Outlet } from "react-router-dom";

const AdminRoot = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default AdminRoot;
