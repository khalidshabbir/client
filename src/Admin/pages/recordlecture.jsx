import React from "react";
import Topbar from "../components/topbar/Topbar";
import Sidebar from "../components/sidebar/Sidebar";
import RecordLectures from "../components/viewLectures/RecordLectures";
const recordlecture = () => {
  return (
    <>
      <div className=" d-flex ">
        <Sidebar />
        <div className="container m-0 p-0">
          <Topbar data={"Feedback"} />
          <RecordLectures />
        </div>
      </div>
    </>
  );
};

export default recordlecture;
