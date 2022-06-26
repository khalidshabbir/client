import React from "react";
import { useState, useEffect } from "react";
import { BiLeftArrowAlt } from "react-icons/bi";
import { NavLink, useHistory } from "react-router-dom";
import "./Fultimetable.css";
import { AiOutlineSearch } from "react-icons/ai";
import { BiTime } from "react-icons/bi";
import { SiGoogleclassroom } from "react-icons/si";
const Fultimetable = () => {
  const [getuserdata, setUserdata] = useState([]);
  const [FilterData, setFilterData] = useState([]);
  const [getDaydata, setDaydata] = useState("10000");
  const [value, setvalue] = useState("");
  console.log(getDaydata);
  const history = useHistory();
  const [getapidata, setapidata] = useState([]);

  const getdata = async () => {
    const res = await fetch("/getdata", {
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
      setFilterData(data);
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  useEffect(() => {
    if (value === "") {
      setFilterData(getuserdata);
    } else {
      console.log(value);
      const filterdatav = getuserdata.filter(
        (datavalues) => datavalues.Room === value
      );
      console.log(filterdatav);
      setFilterData(filterdatav);
    }
  }, [value]);

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

  const mondaytotal = FilterData.filter(
    (datavalues) => datavalues.Day === "10000"
  ).length;
  const tuesdaytotal = FilterData.filter(
    (datavalues) => datavalues.Day === "1000"
  ).length;
  const wednesdaytotal = FilterData.filter(
    (datavalues) => datavalues.Day === "100"
  ).length;
  const thursdaytotal = FilterData.filter(
    (datavalues) => datavalues.Day === "10"
  ).length;
  const fridaytotal = FilterData.filter(
    (datavalues) => datavalues.Day === "1"
  ).length;

  return (
    <>
      <section className="searchsection">
        <div className="container mt-3 ">
          <div className="d-flex  justify-content-between">
            <div className="d-flex align-items-center  timetableerrow">
              <p
                className=""
                style={{
                  fontSize: "20px",
                  marginRight: "25px",
                  cursor: "pointer",
                }}
                onClick={() => history.goBack()}
              >
                <BiLeftArrowAlt />
              </p>
              <h1 className=" ml-5">Timetable</h1>
            </div>

            <input
              className=" searchinput  "
              type="text"
              name="search"
              placeholder="Search.."
              onChange={(e) => setvalue(e.target.value.toUpperCase())}
            />
          </div>
        </div>
        <div className="radio-toolbar-days text-center mb-2 mt-5 d-flex align-items-center justify-content-center mb-5">
          <div className="monday">
            <input
              type="radio"
              id="Mondaybutton"
              name="timebuttons"
              defaultChecked
              onClick={() => {
                setDaydata("10000");
              }}
              value="Monday"
            />

            <label for="Mondaybutton" className="monday">
              Monday <br /> <span>{mondaytotal}</span>
            </label>
          </div>
          <div className="tuesday">
            <input
              type="radio"
              id="tuesdaybutton"
              name="timebuttons"
              onClick={() => {
                setDaydata("1000");
              }}
              value="Tuesday"
            />
            <label for="tuesdaybutton" className="tuesday">
              Tuesday <br /> <span>{tuesdaytotal}</span>
            </label>
          </div>
          <div className="wednesday">
            <input
              type="radio"
              id="wednesdaybutton"
              name="timebuttons"
              onClick={() => {
                setDaydata("100");
              }}
              value="wednesday"
            />
            <label for="wednesdaybutton" className="wednesday">
              Wednesday <br /> <span>{wednesdaytotal}</span>
            </label>
          </div>
          <div className="thursday">
            <input
              type="radio"
              id="Thursdaybutton"
              name="timebuttons"
              onClick={() => {
                setDaydata("10");
              }}
              value="10"
            />
            <label for="Thursdaybutton" className="thursday">
              Thursday <br /> <span>{thursdaytotal}</span>
            </label>
          </div>
          <div className="friday">
            <input
              type="radio"
              id="fridaybutton"
              name="timebuttons"
              onClick={() => {
                setDaydata("1");
              }}
              value="friday"
            />
            <label for="fridaybutton" className="friday">
              Friday <br /> <span>{fridaytotal}</span>
            </label>
          </div>
        </div>
      </section>

      <section className="timetablewrapper">
        <div className="container">
          <div className="row  d-flex row-cols-2  align-items-center justify-content-center mb-5">
            {FilterData.filter((datavalues) =>
              datavalues.Day.match(getDaydata)
            ).map((datavalues, id) => {
              return (
                <>
                  <div className="col-12">
                    <h3 className=" subject">{datavalues.Subjects}</h3>
                    <p className=" teacher">{datavalues.Teacher}</p>
                    <h2 className="text-center  room ">{datavalues.Room}</h2>

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
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Fultimetable;
