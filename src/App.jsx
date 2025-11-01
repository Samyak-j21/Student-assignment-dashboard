// src/App.jsx
import React from 'react';
import { useAuth } from './hooks/useAuth';
import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';

// Main App component determines which view to show
function App() {
    // Context hook provides current user and logout function
    const { currentUser, logout } = useAuth();
    
    // Note: We define primaryColor here for consistency, 
    // but use Tailwind utility classes (blue-500) where possible.
    const redLogoutColor = 'rgb(239, 68, 68)'; // Red RGB for logout button

    // Conditional Rendering: If not logged in, show the login page
    if (!currentUser) {
        return <LoginPage />;
    }

    // Authenticated Layout
    return (
        <div className="min-h-screen" style={{ backgroundColor: 'rgb(249, 250, 251)' }}>
            
            {/* Header/Nav - Shared UI */}
            <header className="p-4 shadow-lg sticky top-0 z-10 bg-white">
                <div className="flex justify-between items-center max-w-7xl mx-auto">
                    {/* Updated to use Tailwind's blue-500 class which is close to the primary RGB */}
                    <h1 className="text-2xl font-extrabold text-blue-500">
                        Assignment Hub
                    </h1>
                    
                    <div className="flex items-center space-x-4">
                        <span className="font-medium text-gray-700 hidden sm:inline">
                            Hello, <span className="font-bold">{currentUser.name}</span>
                        </span>
                        
                        {/* Logout Button uses the defined Red RGB */}
                        <button
                            onClick={logout}
                            className="py-1 px-3 rounded-full text-white font-medium transition-colors hover:bg-red-700"
                            style={{ backgroundColor: redLogoutColor }} 
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </header>

            {/* Role-based Content */}
            <main className="max-w-7xl mx-auto p-4 md:p-8">
                <DashboardPage />
            </main>
        </div>
    );
}

export default App;