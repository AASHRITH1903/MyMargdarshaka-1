// @ts-check

import React, { useState, useEffect } from "react";
import axios from "axios";

import MentorDashboardEditAttributes from "./mentor-edit-attributes";
import MentorDashboardChangeDetails from "./mentor-dashboard-change-details";
import Navbar from "../Navbar/mentor-navbar";
import { verify } from "../../verifyUser";

const MentorDashBoard = () => {
  const [curuser, setCuruser] = useState("No user is logged in");
  const [phone, setPhone] = useState("");

  const [mentorData, setMentorData] = useState({});

  const getData = async (mentor_phone) => {
    console.log(mentor_phone);
    axios.get(`/api/mentor/get-data/phone/${mentor_phone}`).then((res) => {
      const data = res.data;
      console.log(data);
      if (data.phone != null || data.phone != undefined) {
        setMentorData(data);
      }
    });
  };

  useEffect(() => {
    verify(setCuruser, setPhone);
    //const learner_phone = localStorage.getItem("user_phone");
    getData(phone);
  }, [phone]);

  return (
    <div className="mb-3">
      <Navbar />
      <div className="container">
        <div className="row align-items-start">
          <div className="col-xl-3 col-12">
            <MentorDashboardChangeDetails details={mentorData} />
          </div>
          <div className="col-xl-9 col-12">
            <MentorDashboardEditAttributes details={mentorData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorDashBoard;
