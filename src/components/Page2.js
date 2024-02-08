import React, { useState } from 'react';
import Checkbox from './Checkbox';
import Dropdown from './Dropdown';

const Page2 = ({ onPrev, onNext, data, setData }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleDropdownChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue);
  };

  const handleCheckboxChange = (name, isChecked) => {
    setData({ ...data, [name]: isChecked.target.checked });
    
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
      <Dropdown
        label="Dropdown"
        options={dropdownOptions}
        value={selectedOption}
        onChange={handleDropdownChange}
      />
      <br />
      {/* Conditional rendering of checkboxes based on dropdown selection */}
      {(selectedOption === 'DeathMatch' || selectedOption === 'Elimination') && (
        <Checkbox
          label="Checkbox 1"
          name="checkbox1"
          checked={data.checkbox1}
          onChange={(isChecked) => handleCheckboxChange('checkbox1',isChecked)}
        />
      )}
      {selectedOption === 'Elimination' && (
        <Checkbox
          label="Checkbox 2"
          name="checkbox2"
          checked={data.checkbox2}
          onChange={(isChecked) => handleCheckboxChange('checkbox2', isChecked)}
        />
      )}
      {selectedOption === 'Battle Royal' && (
        <Checkbox
          label="Checkbox 3"
          name="checkbox3"
          checked={data.checkbox3}
          onChange={(isChecked) => handleCheckboxChange('checkbox3', isChecked)}
        />
      )}
      <br />
      <button onClick={onPrev}>Previous</button>
      <button onClick={onNext}>Next</button>
    </div>
  );
};

export default Page2;
