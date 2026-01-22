import { Outlet } from "react-router-dom";
import Navbar from "./sections/navbar/navbarSection";
import FooterSection from "./sections/footer/contact";
import { useEffect, useState } from "react";

function Layout() {
  

  
  return ( //navbar and footer is always visible ,outlet is component to recieve the request component
    <>
      <Navbar />
      <Outlet />
      <FooterSection />
    </>
  );
}

export default Layout;
