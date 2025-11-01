// src/api/assignmentAPI.js
import { INITIAL_ASSIGNMENTS, STORAGE_KEY, ALL_STUDENT_IDS } from '../data/mockData';

// Function to initialize data in localStorage if it doesn't exist
const initializeData = () => {
    if (!localStorage.getItem(STORAGE_KEY)) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_ASSIGNMENTS));
    }
};

// 1. Fetch Assignments
export const fetchAssignments = () => {
    initializeData();
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
};

// 2. Submit Assignment (for Student)
export const updateAssignmentSubmission = (assignmentId, studentId) => {
    const assignments = fetchAssignments();
    const now = new Date().toLocaleDateString('en-US');

    const updatedAssignments = assignments.map(a => {
        if (a.id === assignmentId) {
            const updatedSubmissions = a.submissions.map(s => {
                if (s.studentId === studentId) {
                    return { ...s, status: 'submitted', submittedOn: now };
                }
                return s;
            });
            return { ...a, submissions: updatedSubmissions };
        }
        return a;
    });

    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedAssignments));
    return updatedAssignments;
};

// 3. Create Assignment (for Admin)
export const createNewAssignment = (title, dueDate, driveLink) => {
    const assignments = fetchAssignments();
    const newId = `ASG${Date.now().toString().slice(-4)}`;

    const newAssignment = {
        id: newId,
        title,
        dueDate,
        driveLink,
        // Initialize pending status for all students
        submissions: ALL_STUDENT_IDS.map(id => ({ studentId: id, status: 'pending' }))
    };

    const updatedAssignments = [newAssignment, ...assignments];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedAssignments));
    return updatedAssignments;
};