import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import JoblyApi from './api';
import { UserProvider, useUser } from './UserContext'; // Import UserProvider and useUser hook
import Navigation from './components/Navigation';
import Routes from './routes';
import useLocalStorage from './useLocalStorage'; // Import the useLocalStorage hook
import './App.css'

function App() {
  const [token, setToken] = useLocalStorage("token", null); // Token in localStorage

  return (
    <UserProvider>
      <BrowserRouter>
        <InnerApp token={token} setToken={setToken} />
      </BrowserRouter>
    </UserProvider>
  );
}

const InnerApp = ({ token, setToken }) => {
  const { currentUser, setCurrentUser, isLoading: isUserLoading } = useUser(); // Destructure currentUser, setCurrentUser, and isLoading from useUser hook
  const [isLoading, setIsLoading] = useState(true); // Local loading state

  // Get user info from token if it exists
  useEffect(() => {
    async function getUser() {
      if (token) {
        try {
          const { username } = jwtDecode(token);
          JoblyApi.token = token;

          const userData = await JoblyApi.getUser(username);
          setCurrentUser(userData); // Set the user using setCurrentUser from the context
        } catch (error) {
          console.error("Error fetching user data:", error);
          setCurrentUser(null); // If error, clear user
        }
      } else {
        setCurrentUser(null); // If no token, clear user
      }
      setIsLoading(false); // Set loading state to false after fetching user data
    }
    getUser();
  }, [token, setCurrentUser]); // Depend on token to refetch when it changes

  // Handle login
  async function login(data) {
    try {
      const token = await JoblyApi.login(data);
      setToken(token); // Updates localStorage with token
    } catch (error) {
      console.error("Error logging in:", error);
    }
  }

  // Handle signup
  async function signup(data) {
    try {
      const token = await JoblyApi.signup(data);
      setToken(token); // Updates localStorage with token
    } catch (error) {
      console.error("Error signing up:", error);
    }
  }

  // Handle logout
  function logout() {
    setToken(null); // Clears localStorage
    setCurrentUser(null); // Clears current user
  }

  // Show loading message if either loading state is true
  if (isLoading || isUserLoading) return <p>Loading...</p>;

  return (
    <>
      <Navigation logout={logout} />
      {/* <div>
        {currentUser ? <h1>Welcome, {currentUser.firstName}!</h1> : <h1>Please Log In</h1>}
      </div> */}
      <Routes login={login} signup={signup} />
    </>
  );
}

export default App;
