// src/components/ui/Button.jsx
import React from 'react';

// Primary Blue RGB
const primaryColor = 'rgb(59, 130, 246)'; 

const Button = ({ children, onClick, type = 'button', disabled = false, className = '' }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            // Use Tailwind classes with custom RGB for hover effect
            className={`
                py-2 px-4 rounded-lg font-semibold text-white transition-all duration-200 
                shadow-md 
                ${disabled 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : `bg-[${primaryColor}] hover:bg-opacity-90 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[${primaryColor}] focus:ring-opacity-50`
                }
                ${className}
            `}
            style={!disabled ? { backgroundColor: primaryColor } : {}}
        >
            {children}
        </button>
    );
};

export default Button;