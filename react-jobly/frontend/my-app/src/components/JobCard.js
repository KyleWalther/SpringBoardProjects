// src/components/JobCard.js
import React, { useState } from "react";
import "./JobCard.css"; // Import styles for the JobCard

const JobCard = ({ job }) => {
  // Track if the user has applied for this job
  const [applied, setApplied] = useState(false);

  const handleApply = () => {
    // Set the job as applied and disable the button
    setApplied(true);
  };

  return (
    <div className="JobCard">
      <h3>{job.title}</h3>
      <p><strong>Salary:</strong> {job.salary ? `$${job.salary.toLocaleString()}` : "Not provided"}</p>
      {job.equity && <p><strong>Equity:</strong> {job.equity}</p>}
      
      {/* Apply button that changes to "Applied" when clicked */}
      <button 
        onClick={handleApply} 
        disabled={applied} 
        className={applied ? "applied" : ""}
      >
        {applied ? "Applied" : "Apply"}
      </button>
    </div>
  );
};

export default JobCard;
