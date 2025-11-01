import React, { createContext, useContext, useState, useMemo } from 'react';
import { MOCK_USERS } from '../data/mockData';

// 1. Create the Context object
export const AuthContext = createContext();

// 2. Define the Provider component
export const AuthProvider = ({ children }) => {
    // State initialization function reads localStorage only on the first render
    const [currentUser, setCurrentUser] = useState(() => {
        const storedUser = localStorage.getItem('currentUser');
        return storedUser ? JSON.parse(storedUser) : null;
    });

    // Login function updates state and storage
    const login = (userId) => {
        const user = MOCK_USERS.find(u => u.id === userId);
        if (user) {
            console.log('[Auth] login:', user);
            setCurrentUser(user);
            localStorage.setItem('currentUser', JSON.stringify(user));
        } else {
            alert('Invalid User ID. Try s101 (student) or p201 (admin).');
        }
    };

    // Logout function clears state and storage
    const logout = () => {
        setCurrentUser(null);
        localStorage.removeItem('currentUser');
    };

    // Memoize the value object to prevent unnecessary re-renders in children
    const contextValue = useMemo(() => ({
        currentUser,
        login,
        logout,
        isAdmin: currentUser?.role === 'admin',
        isStudent: currentUser?.role === 'student',
    }), [currentUser]);

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};

// Note: useAuth hook is provided in `src/hooks/useAuth.js` to keep imports centralized.