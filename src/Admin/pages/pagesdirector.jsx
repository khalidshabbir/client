import React from "react";
import Topbar from "../components/topbar/Topbar";
import Sidebar from "../components/sidebar/Sidebar";
import Director from "../components/director/Director";
const pages = () => {
  return (
    <>
      <div className=" d-flex ">
        <Sidebar />
        <div className="container m-0 p-0">
          <Topbar data={"Web Pages"} />
          <Director />
        </div>
      </div>
    </>
  );
};

export default pages;
