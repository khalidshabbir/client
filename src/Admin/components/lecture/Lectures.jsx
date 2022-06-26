import React from "react";
import { useState, useEffect } from "react";
import { BiLeftArrowAlt } from "react-icons/bi";
import { NavLink, useHistory } from "react-router-dom";
import "./Lectures.css";
import { AiOutlineSearch } from "react-icons/ai";
import { BiTime } from "react-icons/bi";
import { SiGoogleclassroom } from "react-icons/si";
import Inputbutton from "../inputbutton/Inputbutton";
import { RiAlertLine } from "react-icons/ri";
const Lectures = () => {
  const [getuserdata, setUserdata] = useState([]);
  const [FilterData, setFilterData] = useState([]);
  const [defaultf, setdefautf] = useState([]);
  const [value, setvalue] = useState("");
  const [date, setdate] = useState("");
  const [shownew, setShownew] = useState(false);
  /*==================For today date Funciton =============================*/
  const getdate = () => {
    var today = new Date(),
      date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
    setdate(date);
  };
  /*==================For today date Funciton =============================*/

  const [getapidata, setapidata] = useState([]);

  const getdata = async () => {
    const res = await fetch("/lecture/data", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    if (res.status === 422 || !data) {
      console.log("error ");
    } else {
      setUserdata(data);
      const dayfilter = data.filter((datavalues) => datavalues.Day === "10000");
      console.log("in defell", data);
      setdefautf(dayfilter);
    }
  };
  useEffect(() => {
    getdata();
    getdate();
  }, []);

  /*============================Fetch object End==============================================*/

  useEffect(() => {
    if (FilterData === "") {
      setFilterData(defaultf);
    } else {
      const filterdatav = getuserdata.filter(
        (datavalues) => datavalues.Day === value
      );

      setFilterData(filterdatav);
    }
  }, [value]);
  console.log("filter data is ", FilterData);
  const lecturetime = (slot) => {
    if (slot === "1") {
      return "8:30 AM     to  10:00 AM";
    } else if (slot === "2") {
      return "10:00 AM    to  11:30 AM";
    } else if (slot === "3") {
      return "11:30 AM    to  01:00 PM";
    } else if (slot === "4") {
      return "01:30 PM    to  03:00 PM";
    } else if (slot === "5") {
      return "03:00 AM    to  04:30 AM";
    }
  };

  const updatealldata = async (e) => {
    e.preventDefault();

    const res2 = await fetch("/update/lectures/status", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status: "true",
      }),
    });

    const data2 = await res2.json();
    console.log(data2);

    if (res2.status === 422 || !data2) {
      alert("fill the data");
    } else {
      alert("Data reset clearfully");
      window.location.href = "/Admin/lectures_data";
    }
  };

  const startbutton = () => {
    if (FilterData.length == 0) {
      alert("Please Select date and Day");
    } else {
      setShownew(!shownew);
    }
  };

  return (
    <>
      <section className="searchsection">
        <div className="row  searchbar mt-2 d-flex align-items-center justify-content-between">
          <div className="col">
            <input
              onChange={(e) => setdate(e.target.value)}
              value={date}
              type="date"
            />
          </div>
          <div className="col">
            <p className="m-0 p-0">{date}</p>
          </div>

          <div className="dropdownmenue  col">
            <select
              placeholder="Select Option"
              onChange={(event) => setvalue(event.target.value)}
              className=""
            >
              <option value="" selected>
                Select your option
              </option>
              <option value="10000">Monday</option>
              <option value="1000">Tuesday</option>
              <option value="100">Wednesday</option>
              <option value="10">Thursday</option>
              <option value="1">Friday</option>
            </select>
          </div>
          <div className="col text-end">
            {" "}
            <button className="btn btn-primary px-5 " onClick={startbutton}>
              Start
            </button>
          </div>
        </div>
      </section>

      <section
        className="timetablewrapper mt-5"
        style={{ display: shownew ? "block" : "none" }}
      >
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="row   justify-content-center mb-5">
                {FilterData.map((datavalues, id) => {
                  return (
                    <>
                      <div className="col-12" key={id}>
                        <h3 className=" subject">{datavalues.Subjects}</h3>
                        <p className=" teacher">{datavalues.Teacher}</p>
                        <h2 className="text-center  room ">
                          {datavalues.Room}
                        </h2>

                        <div className="d-flex  flex-row aligin-items-center  justify-content-between mt-3 ">
                          <div className="d-sm-flex align-items-center  classdivclassname ">
                            <p className="icons classes">
                              <SiGoogleclassroom />
                            </p>
                            <p className="text-center classess   ">
                              {datavalues.Classess}
                            </p>
                          </div>
                          <div className="d-flex align-items-center">
                            <p className="icons">
                              <BiTime />
                            </p>
                            <p className="text-center lecture ">
                              {lecturetime(datavalues.Lecture)}
                            </p>
                          </div>
                        </div>
                        <hr />
                        <Inputbutton
                          lecture={datavalues.Lecture}
                          day={datavalues.Day}
                          class={datavalues.Classess}
                          subject={datavalues.Subjects}
                          teacher={datavalues.Teacher}
                          room={datavalues.Room}
                          id={datavalues._id}
                          date={date}
                        />
                      </div>
                    </>
                  );
                })}
                <button
                  className="btn btn-primary w-50 text-center mb-5"
                  onClick={updatealldata}
                >
                  {" "}
                  Complete
                </button>
              </div>
            </div>
            {/* <div className="col"></div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Lectures;
