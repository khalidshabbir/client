import React from "react";
import Topbar from "../components/topbar/Topbar";
import Sidebar from "../components/sidebar/Sidebar";
import Feedback from "../components/feedback/FeedBack";
const feedback = () => {
  return (
    <>
      <div className=" d-flex ">
        <Sidebar />
        <div className="container m-0 p-0">
          <Topbar data={"Feedback"} />
          <Feedback />
        </div>
      </div>
    </>
  );
};

export default feedback;
