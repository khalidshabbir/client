import React from "react";
import Topbar from "../components/topbar/Topbar";
import Sidebar from "../components/sidebar/Sidebar";

import Dashboard from "../components/dashboard/Dashboard";

const home = () => {
  return (
    <>
      <div className=" d-flex ">
        <Sidebar />
        <div className="container m-0 p-0">
          <Topbar data={"Dashboard"} />
          <Dashboard />
        </div>
      </div>
    </>
  );
};

export default home;
