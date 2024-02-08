import React from 'react';
import TextField from './TextField';
import FileUploader from './FileUploader'; 

const Page3 = ({ onPrev, data, setData,onSubmit }) => {
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleFileUpload = (e) => {
    // Handle file upload logic here
  };

   // Callback function to update imageUrl in form data state
   const handleUploadSuccess = (imageUrl) => {
    setData({ ...data, imageUrl });
  };

  return (
    <div>
      <h2>Page 3</h2>
      <TextField
        label="Brand"
        name="brandText"
        value={data.brandText}
        onChange={handleChange}
      />
      <label>Brand Logo:</label>
      <FileUploader onUploadSuccess={handleUploadSuccess}/> {/* Render the FileUploader component here */}
      <br />
      <button onClick={onPrev}>Previous</button>
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
};

export default Page3;
