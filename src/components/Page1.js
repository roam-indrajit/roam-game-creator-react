import React from 'react';
import TextField from './TextField';

const Page1 = ({ onNext, data, setData }) => {
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    
  };

  return (
    <div>
      <h2>Page 1</h2>
      <TextField
        label="Game Name"
        name="gameName"
        value={data.gameName}
        onChange={handleChange}
      />
      <TextField
        label="Creator Name"
        name="creatorName"
        value={data.creatorName}
        onChange={handleChange}
      />
      <TextField
        label="Describe your game world here."
        name="mapPromt"
        value={data.mapPromt}
        onChange={handleChange}
      />
      <button onClick={onNext}>Next</button>
    </div>
  );
};

export default Page1;
