import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar";
import Footer from "../components/Shared/Footer";
const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      {/* <div className="min-h-[calc(100vh-460px)]"> */}
      <Outlet></Outlet>
      {/* </div> */}
      <Footer></Footer>
    </div>
  );
};

export default Root;