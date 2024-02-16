"use client";
import "./jobcardstyle.css";
const JobCard = ({title,location,type,div}) => {



//const JobCard = (props) => { // destructuring method 3rd one
    //const {title,location,type,div} = props // destructuring method 3rd one




  return (
    <div>
      <div className="container-job">
        <h4>{title}</h4>
        <div className="jobdetails-wrapper">
          <div className="Line1">
            <span>{div}</span>
            <span>{location}</span>
            <span className="FullTime">{type}</span>
          </div>
          <div className="Line2">
            <button className="Apply">Apply</button>
            <button className="View">View</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
