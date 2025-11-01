// src/components/StudentSubmissionModal.jsx
import React, { useState } from 'react';

const StudentSubmissionModal = ({ assignment, onClose, onFinalConfirm }) => {
    const [step, setStep] = useState(1); // 1: Initial check, 2: Final confirmation

    // Primary Blue RGB
    const primaryColor = 'rgb(59, 130, 246)'; 
    // Success Green RGB
    const successColor = 'rgb(34, 197, 94)';

    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-80 z-50 flex justify-center items-center p-4">
            <div className="bg-white p-6 rounded-lg shadow-2xl w-full max-w-lg m-4 border-t-4" style={{ borderColor: primaryColor }}>
                
                <h3 className="text-2xl font-extrabold mb-4" style={{ color: primaryColor }}>
                    {assignment.title}
                </h3>

                {step === 1 && (
                    <>
                        <p className="mb-4 text-gray-700">
                            **External Submission:** Please upload your work here first: <br/>
                            <a href={assignment.driveLink} target="_blank" rel="noopener noreferrer" 
                            className="font-medium hover:underline text-lg truncate block" style={{ color: primaryColor }}>
                                {assignment.driveLink}
                            </a>
                        </p>
                        <p className="mb-6 text-lg font-semibold text-gray-800">
                            Verification 1: Have you finished the external upload?
                        </p>
                        <div className="flex justify-end space-x-3">
                            <button onClick={onClose} className="py-2 px-4 rounded-lg text-gray-700 hover:bg-gray-100 transition duration-150">
                                Close & Continue Working
                            </button>
                            <button
                                onClick={() => setStep(2)}
                                className="py-2 px-4 rounded-lg text-white font-semibold transition-colors shadow-md"
                                style={{ backgroundColor: primaryColor }}
                            >
                                Yes, Proceed to Confirmation
                            </button>
                        </div>
                    </>
                )}

                {step === 2 && (
                    <>
                        <p className="mb-6 text-xl font-bold text-red-600">
                            Final Confirmation Required!
                        </p>
                        <p className="mb-6 text-gray-700">
                            Verification 2: By clicking "Finalize Submission," you confirm your work is complete and uploaded. **This status cannot be undone by you.**
                        </p>
                        <div className="flex justify-end space-x-3">
                            <button onClick={() => setStep(1)} className="py-2 px-4 rounded-lg text-gray-700 hover:bg-gray-100 transition duration-150">
                                Re-check Link
                            </button>
                            <button
                                onClick={onFinalConfirm}
                                className="py-2 px-4 rounded-lg text-white font-semibold transition-colors shadow-md"
                                style={{ backgroundColor: successColor }}
                            >
                                Finalize Submission
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default StudentSubmissionModal;