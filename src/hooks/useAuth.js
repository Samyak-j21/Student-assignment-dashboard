// src/hooks/useAuth.js
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext'; // Assuming you named your context file AuthContext.jsx

// This hook simplifies accessing the context value
export const useAuth = () => {
    const context = useContext(AuthContext);

    if (!context) {
        // Essential check to ensure the hook is used inside the provider
        throw new Error('useAuth must be used within an AuthProvider');
    }

    return context;
};