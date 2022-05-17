import React from "react";
import { Outlet } from "react-router-dom";
import './Layout.scss';
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <div className="container-fluid">
      <Navbar />
      <div className="container-fluid pt-4 content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
