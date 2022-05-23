import React from "react";
import { Outlet } from "react-router-dom";
import classNames from "classnames";
import './Layout.scss';
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useSelector } from "react-redux";

const Layout = () => {
  const darkTheme = useSelector((state: any) => state.darkTheme.value);

  return (
    <div className={classNames("container-fluid", {'dark': darkTheme})}>
      <Navbar />
      <div className="container-fluid pt-4 content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
