import React from "react";
import { useState, useEffect } from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import "./FeedBack.css";
const FeedBack = () => {
  const [getuserdata, setUserdata] = useState([]);

  const getdata = async () => {
    const res = await fetch("/getdata/feedback", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": localStorage.getItem("token"),
      },
    });
    const data = await res.json();

    if (res.status === 422 || !data) {
      console.log("error ");
    } else {
      setUserdata(data);
    }
  };

  useEffect(() => {
    getdata();
  }, []);
  /*======================================================*/
  const deleteuser = async (id) => {
    const res2 = await fetch(`/feedback/delete/${id}`, {
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

  /*====================================================================*/
  return (
    <>
      <section className="feedbacksection  px-3">
        <div className="container py-5 px-3 mt-5 tablediv">
          <table class="table table-hover table-striped">
            <thead>
              <tr>
                <th scope="col">Number</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Feedback</th>
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
                      <td>{element.Email}</td>
                      <td>{element.Message}</td>
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
      </section>
    </>
  );
};

export default FeedBack;
