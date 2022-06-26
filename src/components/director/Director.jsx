import React from "react";
import { useState, useEffect } from "react";
import "./director.css";
const Director = () => {
  /*====================================*/
  const [getdirector, setdirector] = useState([]);
  const directorv = async () => {
    const res = await fetch("/getdata/directorv", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();

    if (res.status === 422 || !data) {
      console.log("error ");
    } else {
      setdirector(data);
      console.log(data);
    }
  };
  useEffect(() => {
    directorv();
  }, []);
  /*======================================*/

  return (
    <>
      <section className="vision">
        <h1>Director Vision</h1>
        <div className="container mt-3">
          <div className="newfied">
            {getdirector.map((developer, id) => {
              return (
                <>
                  <div>
                    <h3 className="text-center  mt-3 mb-5">{developer.name}</h3>
                    <p>{developer.text}</p>
                  </div>

                  <img src={`/uploads/${developer.image}`} alt="" />
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Director;
