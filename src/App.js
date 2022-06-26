import React from "react";
import "./App.css";
import Home from "./pages/home";
import About from "./pages/about";
import Booking from "./pages/booking";
import Reminder from "./pages/reminder";
import Report from "./pages/report";
import Timetable from "./pages/timetable";
import Fulltimetable from "./pages/fulltimetable";
import Room from "./pages/room";
import Datesheet from "./pages/datesheet";
import TeacherDatesheetLOGIN from "./pages/datesheetlogin";
import TeacherDatesheet from "./pages/teacherdatesheet";
import { Switch, Route } from "react-router-dom";
import Director from "./pages/director";
import Teachertimetable from "./pages/teachertimetable";
import Compare from "./pages/compare";
import Lecture from "./Admin/pages/lecture";
import CheckedLectures from "./Admin/pages/checkedlectre";
import pages from "./Admin/pages/pages";
import signup from "./Admin/pages/signup";
import Login from "./Admin/pages/Login";
import Dashboard from "./Admin/pages/dashboard";
import ProtectedRoute from "./Admin/components/ProtectedRoute";
import feedback from "./Admin/pages/feedback";
import RecordLectures from "./Admin/pages/recordlecture";
import Pagedirector from "./Admin/pages/pagesdirector";
import PagesContact from "./Admin/pages/pagesContact";
function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/booking" component={Booking}></Route>
        <Route exact path="/director" component={Director}></Route>
        <Route exact path="/reminder" component={Reminder}></Route>
        <Route exact path="/report" component={Report}></Route>
        <Route exact path="/timetable" component={Timetable}></Route>
        <Route exact path="/fulltimetable" component={Fulltimetable}></Route>
        <Route exact path="/rooms" component={Room}></Route>
        <Route exact path="/datesheet" component={Datesheet}></Route>
        <Route
          exact
          path="/teacherdatesheet"
          component={TeacherDatesheetLOGIN}
        ></Route>
        <Route
          exact
          path="/teacherdatesheetLogin_true"
          component={TeacherDatesheet}
        ></Route>
        <Route exact path="/teacher" component={Teachertimetable}></Route>
        <Route exact path="/compare" component={Compare}></Route>
        <Route exact path="/Admin" component={Login}></Route>
        <ProtectedRoute exact path="/Admin/dashboard" component={Dashboard} />
        <ProtectedRoute
          exact
          path="/Admin/pages_director"
          component={Pagedirector}
        />
        <ProtectedRoute
          exact
          path="/Admin/pages_contact"
          component={PagesContact}
        />
        <ProtectedRoute exact path="/Admin/lectures_data" component={Lecture} />
        <ProtectedRoute
          exact
          path="/Admin/lectures_data/update"
          component={CheckedLectures}
        />
        <ProtectedRoute exact path="/Admin/pages" component={pages} />
        <ProtectedRoute exact path="/Admin/feedback" component={feedback} />
        <ProtectedRoute exact path="/Admin/signup" component={signup} />
        <ProtectedRoute
          exact
          path="/record/lectures"
          component={RecordLectures}
        />
      </Switch>
    </>
  );
}

export default App;
