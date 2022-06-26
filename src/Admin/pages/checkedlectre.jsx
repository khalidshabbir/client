import React from "react";
import Topbar from "../components/topbar/Topbar";
import Sidebar from "../components/sidebar/Sidebar";
import Check from "../components/lecture/CheckedLecture";

const home = () => {
  return (
    <>
      <div className=" d-flex ">
        <Sidebar />
        <div className="container m-0 p-0">
          <Topbar data={""} />
          <Check />
        </div>
      </div>
    </>
  );
};

export default home;
