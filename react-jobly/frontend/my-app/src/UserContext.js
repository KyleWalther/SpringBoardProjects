import React, { createContext, useContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import useLocalStorage from './useLocalStorage';
import JoblyApi from './api';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [token, setToken] = useLocalStorage('token', null);
    const [currentUser, setCurrentUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // Fetch current user when token changes
    useEffect(() => {
        async function fetchUser() {
            if (token) {
                try {
                    const { username } = jwtDecode(token);
                    JoblyApi.token = token; // Set token for future requests
                    const userInfo = await JoblyApi.getUser(username);
                    setCurrentUser(userInfo);
                } catch (err) {
                    console.error("Error fetching user data:", err);
                    setCurrentUser(null); // In case of token expiration or other errors
                }
            } else {
                setCurrentUser(null);
            }
            setIsLoading(false); // Stop loading once the request is complete
        }
        fetchUser();
    }, [token]);

    const signup = async (userData) => {
        try {
            const response = await fetch('http://localhost:3001/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userData),
            });
            if (response.ok) {
                const data = await response.json();
                setToken(data.token);
                JoblyApi.token = data.token;
                return data;
            } else {
                throw new Error('Signup failed');
            }
        } catch (err) {
            console.error('Signup error:', err);
            throw err;
        }
    };

    const login = async (userData) => {
        try {
            const response = await fetch('http://localhost:3001/auth/token', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userData),
            });
            if (response.ok) {
                const data = await response.json();
                setToken(data.token);
                JoblyApi.token = data.token;
                return data;
            } else {
                throw new Error('Login failed');
            }
        } catch (err) {
            console.error('Login error:', err);
            throw err;
        }
    };

    const logout = () => {
        setToken(null); // Clear the token from localStorage
        setCurrentUser(null); // Reset the user data
    };

    const updateUser = async (userData) => {
        try {
            const { username, ...dataToSend } = userData;
            const updatedUser = await JoblyApi.updateProfile(username, dataToSend);
            setCurrentUser(updatedUser);
        } catch (err) {
            console.error('Error updating user profile:', err);
            throw err;
        }
    };

    return (
        <UserContext.Provider value={{ currentUser, setCurrentUser, signup, login, logout, updateUser, isLoading }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);
