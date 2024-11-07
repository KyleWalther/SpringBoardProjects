// src/components/CompanyCard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Companies.css';

const CompanyCard = ({ company }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/companies/${company.handle}`); // Navigate to company details page
  };

  return (
    <div className="company-card" onClick={handleClick} style={{ cursor: 'pointer' }}>
      <h2>{company.name}</h2>
      {/* Display any other relevant company info here */}
    </div>
  );
};

export default CompanyCard;
