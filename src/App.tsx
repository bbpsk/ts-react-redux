import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Links from "./components/Links/Links";
import ReduxExs from "./components/ReduxExs/ReduxExs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="links" element={<Links />}/>
          <Route path="redux-ex" element={<ReduxExs />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
