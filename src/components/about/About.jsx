import React from "react";
import "./About.css";
import { useState, useEffect } from "react";
const About = () => {
  /*====================================*/
  const [getAboutus, setAboutus] = useState([]);
  const [Aboutusparagrah, setAboutusparagrah] = useState([]);
  const aboutusmember = async () => {
    const res = await fetch("/getdata/about", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();

    if (res.status === 422 || !data) {
      console.log("error ");
    } else {
      setAboutus(data);
    }
  };
  const aboutusp = async () => {
    const res = await fetch("/getdata/aboutusparagraph", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();

    if (res.status === 422 || !data) {
      console.log("error ");
    } else {
      setAboutusparagrah(data);
    }
  };
  useEffect(() => {
    aboutusmember();
    aboutusp();
  }, []);
  /*======================================*/

  return (
    <>
      <section className="aboutus mb-5">
        <div className="fluid-container">
          <div className="row ">
            <div className=" col-lg bgshape ">
              <h1 className="bgtext text-center ">About Us</h1>
              {Aboutusparagrah.map((obj, id) => {
                return (
                  <>
                    <p
                      className="text-light mt-3"
                      style={{ textAlign: "justify" }}
                    >
                      {obj.aboutus}
                    </p>
                  </>
                );
              })}
            </div>

            <div className="col-lg secondsideabout ">
              {getAboutus.map((developer, id) => {
                return (
                  <>
                    <div className="aboutsrightdiv  d-flex alig-items-start justify-content-start">
                      <img src={`/uploads/${developer.image}`} alt="" />
                      <div>
                        <h3>{developer.Name}</h3>
                        <h6>{developer.Position}</h6>
                        <p>{developer.Bio}</p>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
