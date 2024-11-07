import React, { useState } from 'react';
import './AuthForm.css';
import { useUser } from '../UserContext';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const LoginForm = () => {
    const { login } = useUser();
    const navigate = useNavigate(); // Initialize navigate
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login({ username, password });
            setError('');
            navigate("/companies"); // Redirect after successful login
        } catch (err) {
            setError('Invalid username or password.');
        }
    };

    return (
        <form className="auth-form" onSubmit={handleSubmit}>
            <h2>Login</h2>
            {error && <div className="error">{error}</div>}
            <label htmlFor="username">Username:</label>
            <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
            />
            <label htmlFor="password">Password:</label>
            <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button type="submit">Login</button>
        </form>
    );
};

export default LoginForm;

