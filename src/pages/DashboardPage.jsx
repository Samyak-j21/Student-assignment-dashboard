// src/pages/DashboardPage.jsx
import React from 'react';
import { useAuth } from '../hooks/useAuth';
import StudentDashboard from '../components/StudentDashboard';
import AdminDashboard from '../components/AdminDashboard';

const DashboardPage = () => {
    const { currentUser, isAdmin, isStudent } = useAuth();

    if (!currentUser) {
        // This scenario should be caught by App.jsx, but good practice to handle.
        return <div>Access Denied. Please log in.</div>;
    }

    // Role-based rendering
    if (isAdmin) {
        return <AdminDashboard />;
    }

    if (isStudent) {
        return <StudentDashboard studentId={currentUser.id} />;
    }

    return <div>Role not recognized.</div>;
};

export default DashboardPage;