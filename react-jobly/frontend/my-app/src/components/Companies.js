// src/components/Companies.js
import React, { useState, useEffect } from "react";
import JoblyApi from "../api";
import CompanyCard from "./CompanyCard";
import './Companies.css';

const Companies = () => {
  const [companies, setCompanies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Fetch companies on initial render and when searchTerm changes
  useEffect(() => {
    const fetchCompanies = async () => {
      setIsLoading(true);
      try {
        const companies = await JoblyApi.searchCompanies(searchTerm);
        setCompanies(companies);
      } catch (err) {
        console.error("Error fetching companies:", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCompanies();
  }, [searchTerm]);

  // Handle input changes for the search term
  const handleSearch = (evt) => {
    setSearchTerm(evt.target.value);
  };

  return (
    <div className="Companies">
      <h1>Companies</h1>
      
      {/* Search input */}
      <input
        type="text"
        placeholder="Search for companies..."
        value={searchTerm}
        onChange={handleSearch}
      />

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {companies.length ? (
            companies.map((company) => (
              <CompanyCard key={company.handle} company={company} />
            ))
          ) : (
            <p>No companies found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Companies;
