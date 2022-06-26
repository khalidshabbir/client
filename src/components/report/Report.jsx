import React from "react";
import { useState } from "react";
import "./Report.css";

const Report = () => {
  const [inpval, setINP] = useState({
    Name: "",
    Email: "",
    Message: "",
  });

  const setdata = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setINP((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };

  const addinpdata = async (e) => {
    e.preventDefault();

    const { Name, Email, Message } = inpval;

    const res = await fetch("/register/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Name,
        Email,
        Message,
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
      setINP({
        Name: "",
        Email: "",
        Message: "",
      });
    }
  };

  return (
    <>
      <section className="details">
        <div className="container">
          <h3 className="text-center text-dark text-uppercase ">Contact us</h3>

          <h4 className="text-center text-xl-start my-5">Give feedback </h4>
          <h6 className="text-center text-xl-start mb-2">
            What do you think of this app?
          </h6>
          <h6 className="text-center text-xl-start mb-5">
            Please contact us if you face any issue.
          </h6>

          <div className=" wraper justify-content-between align-items-center d-flex">
            <div className="right">
              <form action="#">
                <h3 className="sectionheading text-dark">Message</h3>
                <div className="formfield row d-flex justify-content-between inputss">
                  <div className=" col-sm d-flex flex-column mb-3 ">
                    <label for="name">
                      Full Name: <span>*</span>
                    </label>
                    <input
                      className="txtfield"
                      type="text"
                      placeholder="Johan"
                      onChange={setdata}
                      value={inpval.Name}
                      name="Name"
                    />
                  </div>
                  <div className="col-sm d-flex flex-column">
                    <label for="name">
                      Email: <span>*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Johan"
                      onChange={setdata}
                      name="Email"
                      value={inpval.Email}
                    />
                  </div>
                </div>

                <div className="d-flex flex-column  ">
                  <label for="name">
                    Message: <span>*</span>
                  </label>
                  <textarea
                    name="Message"
                    placeholder="Message"
                    id=""
                    cols="30"
                    value={inpval.Message}
                    rows="5"
                    onChange={setdata}
                  ></textarea>
                </div>

                <a className="d-flex align-items-center " href="#">
                  <button
                    className="btn btn-primary btnprimary mb-5"
                    onClick={addinpdata}
                  >
                    Submit
                  </button>
                </a>
              </form>
            </div>
            <div className="left  ">
              <h3 className="sectionheading text-dark">Our Contact</h3>
              <div className="d-flex align-items-center mb-3">
                <img src="./assets/images/mails.png" alt="" />
                <div className="flex">
                  <h5>Email Address</h5>
                  <p>example@mail.com</p>
                </div>
              </div>
              <div className="d-flex align-items-center mb-5">
                <img src="./assets/images/phones.png" alt="" />
                <div className="flex">
                  <h5>Phone Num</h5>
                  <p>03023456789</p>
                </div>
              </div>
              <h3 className="sectionheading text-dark">Our Contact</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim a
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Report;
