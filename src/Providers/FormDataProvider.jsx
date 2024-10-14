/* eslint-disable react/prop-types */
import React, { createContext, useState } from 'react';

// Create the context
export const FormDataContext = createContext();

// Create a provider component
export const FormDataProvider = ({ children }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        dob: '',
        placeOfBirth: '',
        religion: '',
        gender: '',
        nationality: '',
        PresentAddress: '',
        permanentAddress: '',
        lastSchool: '',
        mediumOfInstruction: '',
        standard: '',
        reasonForLeaving: '',
        lastSchoolResult: '',
        admissionSoughtAs: '',
        guardianName: '',
        guardianOccupation: '',
        guardianEmail: '',
        guardianPhone: ''
    });
    console.log(formData);

    return (
        <FormDataContext.Provider value={{ formData, setFormData }}>
            {children}
        </FormDataContext.Provider>
    );
};
