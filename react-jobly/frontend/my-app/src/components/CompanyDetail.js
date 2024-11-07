// src/components/CompanyDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import JoblyApi from '../api'; 
import './CompanyDetail.css'
import JobCard from "./JobCard";

const CompanyDetail = () => {
  const { handle } = useParams();
  const [company, setCompany] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCompany = async () => {
      try {
        const companyData = await JoblyApi.getCompany(handle);
        setCompany(companyData);
      } catch (err) {
        console.error("Error loading company details:", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCompany();
  }, [handle]);

  if (isLoading) return <p>Loading...</p>;
  if (!company) return <p>Company not found.</p>;

  return (
    <div className="CompanyDetail">
      <div className="CompanyDetail-header">
        <h1>{company.name}</h1>
        <p>{company.description}</p>
      </div>

      <h3>Jobs at {company.name}</h3>
      <div className="CompanyDetail-jobs">
        {company.jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default CompanyDetail;
