import React from "react";
import Navbar from "../../../components/Navbar";
import Sidebar from "../../../components/Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="grid grid-cols-5">
      {/* Sidebar */}
      <div className="hidden lg:block lg:col-span-1">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="lg:col-span-4">
        <Navbar />
        <div className="py-16 px-4 lg:px-16">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
