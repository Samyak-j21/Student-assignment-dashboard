// src/data/mockData.js

const ALL_STUDENTS_LIST = [
    { id: 's101', name: 'Sujal Singh', role: 'student' },
    { id: 's102', name: 'Sumitra Agrawal', role: 'student' },
    { id: 's103', name: 'Samyak Jain', role: 'student' },
    { id: 's104', name: 'Girish Das', role: 'student' },
];

export const MOCK_USERS = [
    ...ALL_STUDENTS_LIST,
    { id: 'p201', name: 'Dr. Shakuntala Verma', role: 'admin' },
];

export const INITIAL_ASSIGNMENTS = [
    {
        id: 'ASG001',
        title: 'Component Architecture Design',
        dueDate: '2025-11-20',
        driveLink: 'https://drive.google.com/folder/design_guide-a001',
        // Initial submission status
        submissions: [
            { studentId: 's101', status: 'submitted', submittedOn: '2025-11-18' },
            { studentId: 's102', status: 'pending' },
            { studentId: 's103', status: 'submitted', submittedOn: '2025-11-19' },
            { studentId: 's104', status: 'pending' },
        ]
    },
    {
        id: 'ASG002',
        title: 'Tailwind Responsive Layout',
        dueDate: '2025-11-25',
        driveLink: 'https://drive.google.com/folder/responsive_guide-a002',
        submissions: [
            { studentId: 's101', status: 'pending' },
            { studentId: 's102', status: 'submitted', submittedOn: '2025-11-22' },
            { studentId: 's103', status: 'submitted', submittedOn: '2025-11-22' },
            { studentId: 's104', status: 'pending' },
        ]
    }
];

export const ALL_STUDENT_IDS = ALL_STUDENTS_LIST.map(s => s.id);
export const TOTAL_STUDENT_COUNT = ALL_STUDENTS_LIST.length;

// Key for localStorage
export const STORAGE_KEY = 'assignmentData';