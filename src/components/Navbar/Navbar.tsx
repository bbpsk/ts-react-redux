import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import "./Navbar.scss";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const handleRoute = (eventKey: any) => {
    navigate(eventKey);
  };

  return (
    <div className="row justify-content-between py-3 border-bottom">
      <div className="h3 m-2 setWidth">Typescript React Redux App</div>

      <div className="setWidth">
        <Nav
          variant="pills"
          className="m-2"
          defaultActiveKey={location.pathname}
          onSelect={handleRoute}
        >
          <Nav.Item>
            <Nav.Link eventKey="/">{t("nav.home")}</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="/links">{t("nav.links")}</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="/redux-ex">{t("nav.ex")}</Nav.Link>
          </Nav.Item>
        </Nav>
        <div className="mx-2">
          <Form.Select
            size="sm"
            value={i18n.language}
            onChange={(event) => i18n.changeLanguage(event.target.value)}
          >
            <option value="en">{t("langs.en")}</option>
            <option value="es">{t("langs.es")}</option>
            <option value="fr">{t("langs.fr")}</option>
          </Form.Select>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
