import React from "react";
import { useSelector } from "react-redux";
import classNames from "classnames";
import { selectDarkTheme } from "../../store/themeSlice";
import "./Footer.scss";

const Footer = () => {
  const darkTheme = useSelector(selectDarkTheme);
  const textClass = darkTheme ? "text-light" : "text-secondary";

  return (
    <div className="row footerContainer">
      <div className={classNames("footerText", textClass)}>
        Site designed and developed by Rachel Halepeska. Last updated: May 14,
        2022
      </div>
    </div>
  );
};

export default Footer;
