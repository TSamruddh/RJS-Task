"use client";
import { useEffect, useState } from "react";
import "./jobliststyle.css";
import JobCard from "@/components/jobcard/jobcard";
import axios from "axios";

const Joblist = () => {
  const [department, setDepartment] = useState();
  const [location, setLocation] = useState();
  const [function1, setFunction1] = useState();
  const [searchText, setSearchText] = useState("");

  const [locationId, setlocationId] = useState();
  const [deptId, setdeptId] = useState();
  //   const [divId, setdivId] = useState();
  const [funId, setfunId] = useState("");

  const baseUrl = "https://teknorix.jobsoid.com/";
  const fetchData = (url, setData) => {
    axios
      .get(url)
      .then((response) => {
        // Handle successful response
        // console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        // Handle error
        console.error("Error fetching data:", error);
      });
  };

  const fetchSearch = () => {
    console.log("fetchSearch" + searchText, locationId, deptId, funId);
    axios
      .get(
        `${baseUrl}api/v1/jobs?${searchText && `q=${searchText}`}${
          locationId && `&loc=${locationId}`
        }${deptId && `&dept=${deptId}`}${funId && `&fun=${funId}`}`
      )
      .then((response) => {
        // Handle successful response
        console.log(response.data);
        // setData(response.data);
      })
      .catch((error) => {
        // Handle error
        console.error("Error fetching data:", error);
      });
  };

  const data = [
    {
      id: 1,
      title: "Quality Assurance",
      location: "Verna",
      type: "Full Time",
      div: "Testing",
    },
    {
      id: 2,
      title: "Frontend Dev",
      location: "Margao",
      type: "Part Time",
      div: "Engineering",
    },
    {
      id: 3,
      title: "Backend Dev",
      location: "Vasco",
      type: "Part Time",
      div: "Engineering",
    },
    {
      id: 4,
      title: "Full-Stack Dev",
      location: "Panjim",
      type: "Full Time",
      div: "Engineering",
    },
  ];

  useEffect(() => {
    fetchData(`${baseUrl}/api/v1/departments`, setDepartment);
    fetchData(`${baseUrl}/api/v1/locations`, setLocation);
    fetchData(`${baseUrl}/api/v1/functions`, setFunction1);
  }, []);

  //   useEffect(() => {
  //     fetchApi();
  //   }, []);

  return (
    <div>
      <h2>Filter By</h2>

      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search"
      />
      <button onClick={fetchSearch}>Search</button>

      <label for="function">Function:</label>
      <select
        id="function"
        value={funId}
        onChange={(e) => setfunId(e.target.value)}
      >
        {/* <option value="">All Functions</option> */}

        {function1?.map((item) => (
          <option value={item.id} key={item.id}>
            {item.title}
          </option>
        ))}
      </select>

      <label for="department">Department:</label>
      <select
        id="department"
        value={deptId}
        onChange={(e) => setdeptId(e.target.value)}
      >
        {/* <option value="">All Departments</option> */}

        {department?.map((item) => (
          <option value={item.id} key={item.id}>
            {item.title}
          </option>
        ))}
      </select>

      <label htmlFor="location">Location:</label>
      <select
        id="location"
        value={locationId}
        onChange={(e) => {
          setlocationId(e.target.value);
          console.log("locaiton" + e.target.value);
        }}
      >
        {location?.map((item) => (
          <option value={item.id} key={item.id}>
            {item.title}
          </option>
        ))}
      </select>

      <h4 className="Departmenr" style={{ textDecoration: "underline" }}>
        Available Positions
      </h4>
      {data?.map((i) => (
        <JobCard
          key={i.id}
          title={i.title}
          location={i.location}
          type={i.type}
          div={i.div}
        />
      ))}
    </div>
  );
};

export default Joblist;
