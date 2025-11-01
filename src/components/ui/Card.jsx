// src/components/ui/Card.jsx
import React from 'react';

const Card = ({ children, className = '' }) => {
    return (
        <div 
            // Use Tailwind classes for a modern, clean look
            className={`
                p-6 
                bg-white 
                rounded-xl 
                shadow-lg 
                transition-shadow 
                hover:shadow-xl
                ${className}
            `}
        >
            {children}
        </div>
    );
};

export default Card;