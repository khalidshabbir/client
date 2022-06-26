import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light  fluid-containers navbackg">
        <div className="container ">
          <div className="name">
            <NavLink className=" logo d-flex align-items-center" to="/">
              <img src="./assets/images/logopng1231.png" alt="logo" />
              <div className="logoname ">
                <h1>CUI TIMETABLE</h1>
                <p>Comsats University Sahiwal</p>
              </div>
            </NavLink>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="feather feather-bar-chart"
            >
              <line x1="12" y1="20" x2="12" y2="10" />
              <line x1="18" y1="20" x2="18" y2="4" />
              <line x1="6" y1="20" x2="6" y2="16" />
            </svg>
          </button>
          <div
            className=" collapse navbar-collapse nav-links justify-content-end "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mr-auto mb-5 mb-lg-0">
              <li className="nav-item mt-5 mt-lg-0">
                <NavLink
                  className="navbar_items  "
                  aria-current="page"
                  to="/director"
                >
                  Director Vision
                </NavLink>
              </li>
              <li className="nav-item mt-3 mt-lg-0">
                <NavLink
                  className="navbar_items  "
                  aria-current="page"
                  to="/about"
                >
                  About Us
                </NavLink>
              </li>
              <li className="nav-item mt-3 mt-lg-0">
                <NavLink
                  className="navbar_items  "
                  aria-current="page"
                  to="/reminder"
                >
                  Reminder
                </NavLink>
              </li>
              <li className="nav-item mt-3 mt-lg-0">
                <NavLink
                  className="navbar_items  "
                  aria-current="page"
                  to="/booking"
                >
                  Bookings
                </NavLink>
              </li>

              <li className="nav-item mt-3 mt-lg-0">
                <NavLink
                  className="navbar_items  "
                  aria-current="page"
                  to="/report"
                >
                  Feedback
                </NavLink>
              </li>
            </ul>
          </div>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <button
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
              type="button"
              className="btns btns-primary textb"
            >
              Sign In
            </button>
            <div
              class="modal fade"
              id="staticBackdrop"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabindex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-centered ">
                <div class="modal-content bg-primary">
                  <div class="modal-header">
                    <h5 class="modal-title text-light" id="staticBackdropLabel">
                      Sign In
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <a
                      className="text-light"
                      target="blank"
                      href="https://swl-cms.comsats.edu.pk:8082/"
                    >
                      Student
                    </a>
                  </div>
                  <div class="modal-body">
                    <a
                      className="text-light"
                      target="blank"
                      href="https://faculty.comsats.edu.pk/Home/login?returnUrl=https://faculty.comsats.edu.pk/"
                    >
                      Teacher
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
