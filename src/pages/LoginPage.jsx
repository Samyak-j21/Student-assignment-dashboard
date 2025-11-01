// src/pages/LoginPage.jsx
import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { MOCK_USERS } from '../data/mockData';

const LoginPage = () => {
    // We get the login function from the context
    const { login } = useAuth();
    const [selectedUser, setSelectedUser] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        if (selectedUser) {
            // Calling login() updates the Context state, which immediately
            // re-renders App.jsx to show the dashboard.
            login(selectedUser);
        }
    };

    const primaryColor = 'rgb(59, 130, 246)'; // Blue RGB

    return (
        <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: 'rgb(249, 250, 251)' }}>
            <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md border-t-4" style={{ borderColor: primaryColor }}>
                <h2 className="text-3xl font-extrabold mb-6 text-center" style={{ color: primaryColor }}>
                    Assignment Hub Login
                </h2>
                <p className="text-gray-600 mb-6 text-center">Select a mock user to proceed.</p>

                <form onSubmit={handleLogin} className="space-y-4">
                    <select
                        value={selectedUser}
                        onChange={(e) => setSelectedUser(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
                        required
                    >
                        <option value="">-- Select User Role --</option>
                        {MOCK_USERS.map(user => (
                            <option key={user.id} value={user.id}>
                                {user.name} ({user.role})
                            </option>
                        ))}
                    </select>
                    
                    <button
                        type="submit"
                        className="w-full py-3 rounded-lg text-white font-bold transition-colors hover:opacity-90 shadow-lg"
                        style={{ backgroundColor: primaryColor }}
                        disabled={!selectedUser}
                    >
                        Log In
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;