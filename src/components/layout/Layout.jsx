import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./NavBar";
import { SessionProvider } from "../contexts/session.context";

const Layout = () => {
  return (
    <SessionProvider>
      <Navbar />
      <Outlet />
      <footer>footer</footer>
    </SessionProvider>
  );
};

export default Layout;
