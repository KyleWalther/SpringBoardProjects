import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../UserContext'; // Use the custom hook instead of useContext
import './Navigation.css'; // Import your CSS styles

const Navigation = () => {
    const { currentUser, logout } = useUser(); // Access currentUser and logout using useUser hook

    const handleLogout = () => {
        logout(); // Call the logout function
    };

    return (
        <nav className="navbar">
            <Link to='/' className="logo">Jobly</Link> {/* Clickable logo */}
            <div className="nav-links">
                <Link to='/'>Home</Link>
                <Link to='/companies'>Companies</Link>
                <Link to='/jobs'>Jobs</Link>

                {currentUser ? (
                    <>
                        <Link to='/profile'>{currentUser.firstName}</Link>
                        <Link to='/' onClick={handleLogout}>Logout</Link>
                    </>
                ) : (
                    <>
                        <Link to='/login'>Login</Link>
                        <Link to='/signup'>Signup</Link>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navigation;


