import React from "react";
import { useState } from "react";
import { BiCommentDetail } from "react-icons/bi";
import { BsFillFlagFill } from "react-icons/bs";
const Inputbutton = (props) => {
  const [showReport, setReport] = useState("");
  const [show, setshow] = useState(true);
  const [showcomment, setcomment] = useState("");
  const [showdropdown, setdropdwon] = useState("");

  const handleClick = () => {};
  /*============================================*/
  const addinpdata = async (e) => {
    e.preventDefault();

    const res = await fetch("/record/lectures", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Subjects: props.subject,
        Classess: props.class,
        Lecture: props.lecture,
        Day: props.day,
        Teacher: props.teacher,
        Room: props.room,
        Option: showdropdown,
        Comment: showcomment,
        Report: showReport,
        Date: props.date,
        Status: "true",
        id: props.id,
      }),
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 422 || !data) {
      console.log("error ");
      alert("error");
    } else {
      alert("Your Feedback sent Successfully");
      console.log("data added");
      setshow(!show);
    }
  };

  /*=====================================================*/

  return (
    <>
      <div style={{ display: show ? "block" : "none" }}>
        <form action="">
          <div className="">
            <div className="dropdownmenue ">
              <select
                onChange={(event) => setdropdwon(event.target.value)}
                placeholder="Select Option"
                className="w-100"
              >
                <option value="" disabled selected>
                  Select your option
                </option>
                <option value="Yes">Yes</option>
                <option value="Late">Late</option>
                <option value="Yes">No</option>
              </select>
            </div>
          </div>
          <div className="d-flex flex-column inputfield">
            <input
              className="comment"
              placeholder="Comment here"
              type="text"
              onChange={(event) => setcomment(event.target.value)}
            />
            <input
              className="report"
              placeholder="Report"
              type="text"
              onChange={(event) => setReport(event.target.value)}
            />
          </div>

          <div className="submitbutton">
            <button className="submit" onClick={addinpdata}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Inputbutton;
