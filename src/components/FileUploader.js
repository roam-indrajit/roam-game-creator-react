import React, { useState } from 'react';
import axios from 'axios';

const FileUploader = ({ onUploadSuccess }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [presignedUrl, setPresignedUrl] = useState('');
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert('Please select a file');
      return;
    }

    try {
      // Make request to API to get presigned URL
      const response = await axios.get(
        'https://5wlyh93sil.execute-api.eu-west-2.amazonaws.com/vcDemo/presigned_url?action=upload&file_type=png&bucket_name=creatorbrandimages'
      );

      // Extract presigned URL from API response
      const { upload_url, file_key } = response.data;

      // Set presigned URL state
      setPresignedUrl(upload_url);
      console.log("file url  " + "https://creatorbrandimages.s3.eu-west-2.amazonaws.com/"+  file_key)

      // Upload file to presigned URL
      await axios.put(upload_url, selectedFile, {
        headers: {
          'Content-Type': selectedFile.type,
        },
        onUploadProgress: (progressEvent) => {
            const progress = Math.round(
              (progressEvent.loaded / progressEvent.total) * 100
            );
            setUploadProgress(progress);
          },
      });
      const imageUrl = `https://creatorbrandimages.s3.eu-west-2.amazonaws.com/${file_key}`;
      onUploadSuccess(imageUrl);
      alert('File uploaded successfully!');
    } catch (error) {
        console.log(selectedFile.type)
      console.error('Error uploading file:', error);
      alert('Error uploading file. Please try again.');
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      {selectedFile && (
        <div>
          <button onClick={handleUpload}>Upload</button>
          <p>Selected File: {selectedFile.name}</p>
          {uploadProgress > 0 && (
            <progress value={uploadProgress} max="100" />
          )}
        </div>
      )}
    </div>
  );
};

export default FileUploader;
