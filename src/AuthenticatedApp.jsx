import React from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import AxiosApi from "./Components/Axios/Hero";
import Profile from "./Components/Axios/Profile";
import Channel from "./Components/Axios/Channel";
import Menu from "./Components/Important/Menu";
import Header from "./Components/Important/Header";

function AuthenticatedApp() {
  return (
    <div className="container" style={{ display: "flex" }}>
      <Menu />
      <div className="all">
        <Header />
        <Routes>
          <Route path="/" element={<AxiosApi/>} />
          <Route path="/home" element={<AxiosApi />} />
          <Route path="/photos/:id" element={<Profile />} />
          <Route path="/channel/" element={<Channel />} />
        </Routes>
      </div>
    </div>
  );
}

export default AuthenticatedApp;
