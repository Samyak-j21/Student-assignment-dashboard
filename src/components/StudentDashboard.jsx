// src/components/StudentDashboard.jsx - Enhanced UI
import React, { useState, useEffect } from 'react';
import { fetchAssignments, updateAssignmentSubmission } from '../api/assignmentAPI';
import StudentSubmissionModal from './StudentSubmissionModal';

const StudentDashboard = ({ studentId }) => {
    const [assignments, setAssignments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedAssignment, setSelectedAssignment] = useState(null);

    useEffect(() => {
        const data = fetchAssignments();
        setAssignments(data);
        setLoading(false);
    }, []);

    const studentAssignments = assignments.map(a => {
        const submission = a.submissions.find(s => s.studentId === studentId);
        return {
            ...a,
            status: submission ? submission.status : 'pending',
            submittedOn: submission?.submittedOn,
        };
    });

    const total = studentAssignments.length;
    const submittedCount = studentAssignments.filter(a => a.status === 'submitted').length;
    const progress = total > 0 ? (submittedCount / total) * 100 : 0;

    const handleFinalSubmission = () => {
        if (selectedAssignment) {
            const updatedData = updateAssignmentSubmission(selectedAssignment.id, studentId);
            setAssignments(updatedData);
            setSelectedAssignment(null);
        }
    };

    // --- RGB Colors ---
    const primaryBlue = 'rgb(59, 130, 246)'; 
    const successGreen = 'rgb(34, 197, 94)'; 
    const pendingYellow = 'rgb(245, 158, 11)'; // Tailwind's yellow-600

    if (loading) return <div className="text-center py-10">Loading assignments...</div>;
    
    return (
        <div>
            <h2 className="text-4xl font-extrabold mb-10 text-gray-800">
                📚 My Assignment Tracker
            </h2>

            {/* Overall Progress Indicator - VIBRANT GRADIENT */}
            <div className="mb-12 p-8 rounded-2xl shadow-2xl border-b-8" style={{ background: 'white', borderColor: successGreen }}>
                <h3 className="text-2xl font-bold mb-4 text-gray-700">Overall Completion: <span className="text-3xl" style={{color: primaryBlue}}>{Math.round(progress)}%</span></h3>
                <div className="h-3 rounded-full overflow-hidden bg-gray-200">
                    {/* Use a background image or linear-gradient style for a nicer effect */}
                    <div
                        className="h-full transition-all duration-1000 ease-out"
                        style={{ 
                            width: `${progress}%`, 
                            background: `linear-gradient(90deg, ${primaryBlue}, ${successGreen})` // Custom Gradient
                        }}
                    />
                </div>
                <p className="text-sm text-gray-500 mt-3">{submittedCount} / {total} assignments completed.</p>
            </div>

            {/* Assignment List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {studentAssignments.map(a => (
                    <div 
                        key={a.id} 
                        // Enhanced Shadow and Border based on Status
                        className="p-6 rounded-xl shadow-xl transition-all hover:shadow-2xl border-l-8"
                        style={{ 
                            backgroundColor: 'white', 
                            borderColor: a.status === 'submitted' ? successGreen : pendingYellow 
                        }}
                    >
                        <h4 className="text-xl font-bold mb-2 text-gray-800">{a.title}</h4>
                        <p className="text-sm text-gray-500 mb-4">Due: **{a.dueDate}**</p>

                        <div className={`py-1 px-3 inline-block rounded-md text-sm font-bold mb-4 
                            ${a.status === 'submitted' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}
                        >
                            {a.status.toUpperCase()}
                        </div>

                        {a.status === 'pending' ? (
                            <button
                                onClick={() => setSelectedAssignment(a)}
                                className="w-full py-2.5 rounded-lg text-white font-bold transition-colors mt-3 hover:shadow-lg hover:opacity-95"
                                style={{ backgroundColor: primaryBlue }}
                            >
                                Confirm Submission
                            </button>
                        ) : (
                            <p className="text-md font-semibold text-gray-700 mt-3">
                                ✅ Submitted on: {a.submittedOn}
                            </p>
                        )}
                    </div>
                ))}
            </div>

            {/* Modal Activation (Same logic) */}
            {selectedAssignment && (
                <StudentSubmissionModal
                    assignment={selectedAssignment}
                    onClose={() => setSelectedAssignment(null)}
                    onFinalConfirm={handleFinalSubmission}
                />
            )}
        </div>
    );
};

export default StudentDashboard;