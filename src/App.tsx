import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Links from "./components/Links";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="links" element={<Links />}/>
          <Route path="redux-ex"/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
