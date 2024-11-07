// src/components/Jobs.js
import React, { useEffect, useState } from "react";
import JoblyApi from "../api";
import JobCard from "./JobCard";
import "./Jobs.css";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const jobsData = await JoblyApi.getJobs();
        setJobs(jobsData);
      } catch (err) {
        console.error("Error loading jobs:", err);
        setError("Failed to load jobs. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchJobs();
  }, []);

  if (isLoading) return <p>Loading jobs...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="Jobs">
      <h1>Job Listings</h1>
      <div className="Jobs-list">
        {jobs.length ? (
          jobs.map((job) => (
            <JobCard key={job.id} job={job} hasApplied={job.hasApplied} />
          ))
        ) : (
          <p>No jobs found.</p>
        )}
      </div>
    </div>
  );
};

export default Jobs;
