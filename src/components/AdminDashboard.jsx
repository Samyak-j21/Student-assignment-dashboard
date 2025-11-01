// src/components/AdminDashboard.jsx - Enhanced UI (Table and Panels)
import React, { useState, useEffect } from 'react';
import { fetchAssignments, createNewAssignment } from '../api/assignmentAPI';
import { MOCK_USERS, TOTAL_STUDENT_COUNT } from '../data/mockData';
import ProgressRing from './ui/ProgressRing';

const AdminDashboard = () => {
    const [assignments, setAssignments] = useState([]);
    const students = MOCK_USERS.filter(u => u.role === 'student');

    // Form State
    const [newTitle, setNewTitle] = useState('');
    const [newDueDate, setNewDueDate] = useState('');
    const [newDriveLink, setNewDriveLink] = useState('');

    // Fetch data and recalculate on mount/update
    useEffect(() => {
        setAssignments(fetchAssignments());
    }, []);

    const primaryBlue = 'rgb(59, 130, 246)'; // Blue
    const successGreen = 'rgb(34, 197, 94)'; // Green

    const handleCreateAssignment = (e) => {
        e.preventDefault();
        if (!newTitle || !newDueDate || !newDriveLink) return;

        const updatedData = createNewAssignment(newTitle, newDueDate, newDriveLink);
        setAssignments(updatedData);

        // Reset form
        setNewTitle('');
        setNewDueDate('');
        setNewDriveLink('');
    };

    // Calculate progress for display
    const assignmentsWithProgress = assignments.map(a => {
        const submittedCount = a.submissions.filter(s => s.status === 'submitted').length;
        const progress = (submittedCount / TOTAL_STUDENT_COUNT) * 100;
        return { ...a, progress, submittedCount };
    });

    // Helper to get submission status for a given assignment/student
    const getStudentStatus = (assignment, studentId) => {
        return assignment.submissions.find(s => s.studentId === studentId)?.status || 'pending';
    };

    return (
        <div>
            <h2 className="text-4xl font-extrabold mb-10 text-gray-800">
                👩‍🏫 Course Management Console
            </h2>

            {/* --- New Assignment Form Panel --- */}
            <div className="mb-12 p-8 rounded-2xl shadow-xl border-t-8" style={{ backgroundColor: 'white', borderColor: primaryBlue }}>
                <h3 className="text-2xl font-bold mb-6 text-gray-700">
                    Publish New Assignment
                </h3>
                <form onSubmit={handleCreateAssignment} className="space-y-5">
                    <input
                        type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)}
                        placeholder="Assignment Title (e.g., Final Project Report)" required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition duration-150"
                    />
                    <div className="flex flex-col md:flex-row gap-4">
                        <input
                            type="date" value={newDueDate} onChange={(e) => setNewDueDate(e.target.value)}
                            required
                            className="w-full md:w-1/2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="url" value={newDriveLink} onChange={(e) => setNewDriveLink(e.target.value)}
                            placeholder="External Drive Link (URL)" required
                            className="w-full md:w-1/2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 rounded-lg text-white text-lg font-bold transition-colors hover:shadow-lg hover:opacity-95"
                        style={{ backgroundColor: primaryBlue }}
                    >
                        Publish Assignment
                    </button>
                </form>
            </div>

            {/* --- Submission Status Table --- */}
            <h3 className="text-2xl font-bold mb-6 text-gray-700">
                Submission Status Overview
            </h3>

            <div className="overflow-x-auto rounded-xl shadow-xl border border-gray-200">
                <table className="min-w-full divide-y divide-gray-200 bg-white">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Assignment</th>
                            <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Due Date</th>
                            <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Progress</th>
                            <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Status</th>
                            {students.slice(0, 3).map(s => ( // Display top 3 students in main view for quick check
                                <th key={s.id} className="px-6 py-3 text-center text-xs font-bold text-gray-600 uppercase tracking-wider hidden lg:table-cell">{s.name.split(' ')[0]}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {assignmentsWithProgress.map(a => (
                            <tr key={a.id} className="hover:bg-blue-50 transition duration-150">
                                {/* Assignment Title */}
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-lg font-medium text-gray-900">{a.title}</div>
                                    <div className="text-sm text-gray-500">ID: {a.id}</div>
                                </td>
                                
                                {/* Due Date */}
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{a.dueDate}</td>
                                
                                {/* Progress Ring/Percentage */}
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center space-x-3">
                                        <ProgressRing percentage={a.progress} />
                                    </div>
                                </td>
                                
                                {/* Submitted / Pending Count */}
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm">
                                        <span className="font-bold" style={{ color: successGreen }}>{a.submittedCount}</span> Submitted
                                    </div>
                                    <div className="text-sm text-red-600">
                                        {TOTAL_STUDENT_COUNT - a.submittedCount} Pending
                                    </div>
                                </td>

                                {/* Individual Student Status (Responsive Detail) */}
                                {students.slice(0, 3).map(s => {
                                    const status = getStudentStatus(a, s.id);
                                    return (
                                        <td key={s.id} className="px-6 py-4 whitespace-nowrap text-center hidden lg:table-cell">
                                            <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full 
                                                ${status === 'submitted' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                                {status === 'submitted' ? '✔' : '...'}
                                            </span>
                                        </td>
                                    );
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
            <p className="text-sm text-gray-500 mt-6 italic">
                *The table displays overall status and quick checks. Individual student details are available via the submissions array.
            </p>
        </div>
    );
};

export default AdminDashboard;