import React from "react";
import Navbar from "./Component/Navbar/Navbar";

import Loginform from "./Component/LoginForm/Loginform";
import Private from "./Component/Private/Private";
import { Home } from "./Pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Info from "./Pages/Movieinfo/Info";

export const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Loginform />} />
        <Route path="/home" element={<Private Component={Home} />} />
        <Route path='/moviei/:id' element={<Private Component={Info} />} />
        <Route path='/:id' element={<Private Component={Info} />} />
      </Routes>

    </>
  );
};
