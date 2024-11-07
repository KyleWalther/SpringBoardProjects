import React, { useState } from 'react';
import { useUser } from '../UserContext';
import './Profile.css'; // Import the CSS styles

function Profile() {
  const { currentUser, updateUser } = useUser();
  const [formData, setFormData] = useState({
    firstName: currentUser.firstName || "",
    lastName: currentUser.lastName || "",
    email: currentUser.email || "",
    username: currentUser.username,
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((f) => ({
      ...f,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUser(formData);
    } catch (err) {
      setError("Failed to update profile.");
    }
  };

  return (
    <div className="profile-container">
      <h2>Profile</h2>
      {error && <p className="error-message">{error}</p>}
      <form className="profile-form" onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Last Name:
          <input
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit" className="save-button">Save Changes</button>
      </form>
    </div>
  );
}

export default Profile;
