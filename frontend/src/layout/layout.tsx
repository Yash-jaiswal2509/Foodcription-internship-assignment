import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useAuth } from "@/providers/AuthProvider";

const Layout = () => {
  const { token } = useAuth();
  return (
    <div className="relative">
      <Header />
      <Outlet />
      {token ? <></> : <Footer />}
    </div>
  );
};

export default Layout;
