import React, { useState } from 'react';
import Checkbox from './Checkbox';
import Dropdown from './Dropdown';

const Page2 = ({ onPrev, onNext, data, setData }) => {
  const [checkboxes, setCheckboxes] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
  });

  const handleCheckboxChange = (e) => {
    setCheckboxes({ ...checkboxes, [e.target.name]: e.target.checked });
  };

  const handleDropdownChange = (e) => {
    setData({ ...data, gameType: e.target.value });
  };

  // Example options for the dropdown
  const dropdownOptions = [
    { label: 'DeathMatch', value: 'DeathMatch' },
    { label: 'Elimination', value: 'Elimination' },
    { label: 'Battle Royal', value: 'Battle Royal' },
  ];

  return (
    <div>
      <h2>Page 2</h2>
      <Checkbox
        label="Checkbox 1"
        name="checkbox1"
        checked={checkboxes.checkbox1}
        onChange={handleCheckboxChange}
      />
      <Checkbox
        label="Checkbox 2"
        name="checkbox2"
        checked={checkboxes.checkbox2}
        onChange={handleCheckboxChange}
      />
      <Checkbox
        label="Checkbox 3"
        name="checkbox3"
        checked={checkboxes.checkbox3}
        onChange={handleCheckboxChange}
      />
      <Dropdown
        label="Dropdown"
        options={dropdownOptions}
        value={data.gameType}
        onChange={handleDropdownChange}
      />
      <br />
      <button onClick={onPrev}>Previous</button>
      <button onClick={onNext}>Next</button>
    </div>
  );
};

export default Page2;
