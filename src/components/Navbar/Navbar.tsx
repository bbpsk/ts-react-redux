import React, { useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const handleRoute = (eventKey: any) => {
    navigate(eventKey);
  }

  return (
    <div className="row py-3 px-lg-4 border-bottom">
      <div className="col-7">
        <div className="h3">Typescript React Redux App</div>  
      </div>
      <div className="col-5">
        <Nav variant="pills" className="justify-content-end" 
          defaultActiveKey={location.pathname} onSelect={handleRoute}>
          <Nav.Item>
            <Nav.Link eventKey="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="/links">Links</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="/redux-ex">Examples</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </div>
  );
};

export default Navbar;
