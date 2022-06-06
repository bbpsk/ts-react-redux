import React from "react";
import { Outlet } from "react-router-dom";
import classNames from "classnames";
import { useSelector } from "react-redux";
import "./Layout.scss";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { selectTheme } from "../../store/themeSlice";

const Layout = () => {
  const theme = useSelector(selectTheme);

  return (
    <div
      className={classNames("container-fluid", theme.primaryColor, {
        dark: theme.isDark,
      })}
    >
      <Navbar />
      <div className="container-fluid pt-4 content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
