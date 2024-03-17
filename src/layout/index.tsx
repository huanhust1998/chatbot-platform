import React from "react";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <div className="w-screen h-screen px-20">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
