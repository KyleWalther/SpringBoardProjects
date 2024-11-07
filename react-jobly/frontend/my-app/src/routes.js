import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Companies from './components/Companies';
import CompanyDetail from './components/CompanyDetail';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Profile from './components/Profile';
import Jobs from './components/Jobs';
import { useUser } from './UserContext';

// ProtectedRoute component to check for current user
const ProtectedRoute = ({ children }) => {
    const { currentUser } = useUser();
    return currentUser ? children : <Navigate to="/login" />;
};

const AppRoutes = ({ signup, login }) => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginForm login={login} />} />
            <Route path="/signup" element={<SignupForm signup={signup} />} />
            <Route
                path="/companies"
                element={
                    <ProtectedRoute>
                        <Companies />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/companies/:handle"
                element={
                    <ProtectedRoute>
                        <CompanyDetail />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/jobs"
                element={
                    <ProtectedRoute>
                        <Jobs />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/profile"
                element={
                    <ProtectedRoute>
                        <Profile />
                    </ProtectedRoute>
                }
            />
        </Routes>
    );
};

export default AppRoutes;


