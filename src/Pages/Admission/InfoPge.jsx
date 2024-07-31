import { useLocation } from 'react-router-dom';

const DataPage = () => {
  const location = useLocation();
  const { formData } = location.state || {};

  if (!formData) {
    return <p>No data available. Please fill out the form first.</p>;
  }

  return (
    <div>
      <h2>Your Information</h2>
      <p><strong>First Name:</strong> {formData.firstName}</p>
      <p><strong>Last Name:</strong> {formData.lastName}</p>
      <p><strong>Date of Birth:</strong> {formData.dob}</p>
      <p><strong>Place of Birth:</strong> {formData.placeOfBirth}</p>
      <p><strong>Religion:</strong> {formData.religion}</p>
      <p><strong>Gender:</strong> {formData.gender}</p>
      <p><strong>Nationality:</strong> {formData.nationality}</p>
      <p><strong>Residential Address:</strong> {formData.residentialAddress}</p>
      <p><strong>Correspondent Address:</strong> {formData.correspondentAddress}</p>
      <p><strong>Last School:</strong> {formData.lastSchool}</p>
      <p><strong>Medium of Instruction:</strong> {formData.mediumOfInstruction}</p>
      <p><strong>Standard:</strong> {formData.standard}</p>
      <p><strong>Reason for Leaving:</strong> {formData.reasonForLeaving}</p>
      <p><strong>Last School Result:</strong> {formData.lastSchoolResult}</p>
      <p><strong>Admission Sought As:</strong> {formData.admissionSoughtAs}</p>
      <p><strong>Local Guardian Name:</strong> {formData.guardianName}</p>
      <p><strong>Local Guardian Occupation:</strong> {formData.guardianOccupation}</p>
      <p><strong>Local Guardian Email:</strong> {formData.guardianEmail}</p>
      <p><strong>Local Guardian Phone:</strong> {formData.guardianPhone}</p>
    </div>
  );
};

export default DataPage;
