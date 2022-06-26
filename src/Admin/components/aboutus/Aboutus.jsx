import React from "react";
import { useState, useEffect } from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { AiFillEdit } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import { IoMdPersonAdd } from "react-icons/io";
import { Modal, Form, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import axios from "axios";
import "./About.css";

const Aboutus = () => {
  /*==========================================================================*/

  const [shownew, setShownew] = useState(false);
  const [showaboutus, setaboutus] = useState(false);
  const [viewprofiles, setviewprofile] = useState(false);

  /*=====================================================================*/
  const [name, setname] = useState("");
  const [position, setposition] = useState("");
  const [bio, setbio] = useState("");
  const [image, setimage] = useState("");
  const [about, setabout] = useState("");
  const [aboutusdatap, setaboutusdatap] = useState("");
  const [id, setid] = useState("");

  /*=================================================================*/
  const [getuserdata, setUserdata] = useState([]);
  const [getaboutusdata, setaboutusdata] = useState([]);

  const getdata = async () => {
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
      setUserdata(data);
    }
  };
  const getdataaboutus = async () => {
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
      setaboutusdata(data);
    }
  };

  useEffect(() => {
    getdata();
    getdataaboutus();
  }, []);
  /*======================================================*/
  const deleteuser = async (did) => {
    const res2 = await fetch(`/about/delete/${did}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const deletedata = await res2.json();
    console.log(deletedata);

    if (res2.status === 422 || !deletedata) {
      console.log("error");
      alert("There is an error");
    } else {
      console.log("user deleted");
      alert("Your record is delete");
      getdata();
    }
  };
  /*==============================================================================*/
  const viewprofile = (id) => {
    setviewprofile(!viewprofiles);
    viewgetdata(id);
  };
  const [viewdata, setviewdata] = useState([]);

  const viewgetdata = async (id) => {
    console.log("Thisi s viewgetdata");
    console.log(id);
    const res = await fetch(`/getdata/about/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    if (res.status === 422 || !data) {
      console.log("error ");
    } else {
      setviewdata(data);
      console.log("get data");
    }
  };

  /*==================================================================*/

  const changeOnClick = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("position", position);
    formData.append("bio", bio);
    formData.append("image", image);

    axios
      .post("/register/about", formData)
      .then((res) => {
        alert("Your Record has been Saved Successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  /*==========================================================================*/
  const updateuser = async (e) => {
    e.preventDefault();

    const res2 = await fetch(`/updataboutus/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        aboutus: aboutusdatap,
      }),
    });

    const data2 = await res2.json();
    console.log(data2);

    if (res2.status === 422 || !data2) {
      alert("fill the data");
    } else {
      alert("Data updated Successfully");
      window.location.href = "/Admin/pages";
    }
  };

  /*=======================================================================*/
  return (
    <>
      <section className="searchsection">
        <div className="container searchbar mt-3 p-3 d-flex align-items-center ">
          <NavLink
            className="navbar_items me-3 text-primary"
            aria-current="pages"
            to="/Admin/pages"
          >
            About us
          </NavLink>
          <NavLink
            className="navbar_items me-3 text-primary"
            aria-current="pages_director"
            to="/Admin/pages_director"
          >
            Director
          </NavLink>
          <NavLink
            className="navbar_items me-3 text-primary"
            aria-current="page"
            to="/Admin/pages_contact"
          >
            Contacts
          </NavLink>
        </div>
      </section>

      <section className="aboutusadmin">
        <h2 className="text-center mt-3">About Us Page</h2>
        <p className="ms-3">About us details of member</p>
        <div className="container py-5 px-3 mt-2 ">
          <div className="text-end">
            {" "}
            <button
              className="btn btn-success px-3"
              onClick={() => setShownew(!shownew)}
            >
              <IoMdPersonAdd />
            </button>
          </div>
          <div
            className="newmember aboutusdiv p-5 pt-3"
            style={{ display: shownew ? "block" : "none" }}
          >
            <div className="container ">
              <h2 className="text-center">Intsert new Team Member</h2>
              <div className="row">
                <form onSubmit={changeOnClick} encType="multipart/from-data">
                  <div class="mb-3 col-lg-6 col-md-6 col-12">
                    <label for="exampleInputEmail1" class="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      name="Name"
                      onChange={(e) => setname(e.target.value)}
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div class="mb-3 col-lg-6 col-md-6 col-12">
                    <label for="exampleInputPassword1" class="form-label">
                      Position
                    </label>
                    <input
                      type="text"
                      name="Position"
                      required
                      onChange={(e) => setposition(e.target.value)}
                      class="form-control"
                      id="exampleInputPassword1"
                    />
                  </div>
                  <div class="mb-3 col-lg-6 col-md-6 col-12">
                    <label for="exampleInputPassword1" class="form-label">
                      Bio
                    </label>
                    <input
                      type="text"
                      name="Bio"
                      required
                      class="form-control"
                      onChange={(e) => setbio(e.target.value)}
                      id="exampleInputPassword1"
                    />
                  </div>

                  <button type="submit" class="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="table-responsive">
            <table class="table table-hover table-striped">
              <thead>
                <tr>
                  <th scope="col">Number</th>
                  <th scope="col">Name</th>
                  <th scope="col">Position</th>
                  <th scope="col">Bio</th>
                  <th scope="col">Action</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {getuserdata.map((element, id) => {
                  return (
                    <>
                      <tr>
                        <th scope="row">{id + 1}</th>
                        <td>{element.Name}</td>
                        <td>{element.Position}</td>
                        <td>{element.Bio}</td>
                        <td>
                          <button
                            className="btn btn-success px-3"
                            onClick={() => viewprofile(element._id)}
                          >
                            <AiFillEye />
                          </button>
                        </td>
                        <td>
                          <button className="btn btn-primary px-3">
                            <AiFillEdit />
                          </button>
                        </td>
                        <td>
                          <button
                            className="btn btn-danger px-3"
                            onClick={() => deleteuser(element._id)}
                          >
                            <RiDeleteBin6Fill />
                          </button>
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* =======================================Table End here======================================================= */}
          <div
            className="viewprofile  aboutusdiv profile p-5 pt-3"
            style={{ display: viewprofiles ? "block" : "none" }}
          >
            <div className="container d-flex align-items-center">
              <div className="text-start ">
                <img className="" src={`/uploads/${viewdata.image}`} alt="" />
              </div>
              <div className="texts">
                <h1>{viewdata.Name}</h1>
                <p>{viewdata.Position}</p>
                <p>{viewdata.Bio}</p>
              </div>
            </div>
          </div>
          {/* =========================================================================================================== */}
        </div>

        {/*////////////////////////////////////////////////////////////////////////////////  */}
      </section>
      {/* =============================================================================== */}
      <section className="aboutusadmin mt-5">
        <h2 className="text-center mt-3">About Us</h2>
        <p className="ms-3">About us details of member</p>
        <div className="container py-5 px-3 mt-2 ">
          <div
            className="newmember aboutusdiv p-3 pt-3"
            style={{ display: showaboutus ? "block" : "none" }}
          >
            <div className="container ">
              <h2 className="text-center">Intsert new About us</h2>
              <div className="row">
                <form onSubmit={changeOnClick}>
                  <div class="mb-3 col-lg-6 col-md-6 col-12">
                    <label for="exampleInputEmail1" class="form-label">
                      About us
                    </label>
                    <textarea
                      type="text"
                      required
                      name="Name"
                      placeholder="About us here"
                      onChange={(e) => setaboutusdatap(e.target.value)}
                      className="form-control w-100"
                      id="exampleInputEmail1"
                    />
                  </div>

                  <button
                    type="submit"
                    class="btn btn-primary"
                    onClick={updateuser}
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="table-responsive">
            {" "}
            <table class="table table-hover table-striped">
              <thead>
                <tr>
                  <th scope="col">About us</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {getaboutusdata.map((element, id) => {
                  return (
                    <>
                      <tr>
                        <td>{element.aboutus}</td>

                        <td className="">
                          <button
                            className="btn btn-primary px-3"
                            onClick={() => {
                              setaboutus(!showaboutus);
                              setid(element._id);
                            }}
                          >
                            <AiFillEdit />
                          </button>
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* =======================================Table End here======================================================= */}

          {/* =========================================================================================================== */}
        </div>

        {/*////////////////////////////////////////////////////////////////////////////////  */}
      </section>
    </>
  );
};

export default Aboutus;
