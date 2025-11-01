// src/components/ui/ProgressRing.jsx
import React from 'react';

const ProgressRing = ({ percentage }) => {
    const radius = 45;
    const strokeWidth = 10;
    const center = 50;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;

    // Primary Blue RGB for the ring
    const ringColor = `rgb(59, 130, 246)`;

    return (
        <div className="relative w-28 h-28">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                {/* Background Track */}
                <circle
                    cx={center} cy={center} r={radius} fill="none" stroke="rgb(229, 231, 235)" strokeWidth={strokeWidth}
                />
                {/* Progress Arc */}
                <circle
                    cx={center} cy={center} r={radius} fill="none" stroke={ringColor} strokeWidth={strokeWidth}
                    strokeDasharray={circumference} strokeDashoffset={offset}
                    strokeLinecap="round" className="transition-all duration-500 ease-in-out"
                />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xl font-bold" style={{ color: ringColor }}>
                    {Math.round(percentage)}%
                </span>
            </div>
        </div>
    );
};

export default ProgressRing;