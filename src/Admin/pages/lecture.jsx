import React from "react";
import Topbar from "../components/topbar/Topbar";
import Sidebar from "../components/sidebar/Sidebar";
import Lectures from "../components/lecture/Lectures";

const lecture = () => {
  return (
    <>
      <div className=" d-flex ">
        <Sidebar />
        <div className="container m-0 p-0">
          <Topbar />
          <Lectures />
        </div>
      </div>
    </>
  );
};

export default lecture;
