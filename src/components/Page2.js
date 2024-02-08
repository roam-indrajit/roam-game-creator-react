import React, { useState } from 'react';
import Checkbox from './Checkbox';
import Dropdown from './Dropdown';

const Page2 = ({ onPrev, onNext, data, setData }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleDropdownChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue);

    // Update the formData with the selected gameType
  setData({ ...data, gameType: selectedValue });
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
          label="Hand Gun"
          name="checkbox1"
          checked={data.handgun}
          onChange={(isChecked) => handleCheckboxChange('handgun',isChecked)}
        />
      )}
      {selectedOption === 'Elimination' && (
        <Checkbox
          label="Rifels"
          name="checkbox2"
          checked={data.rifel}
          onChange={(isChecked) => handleCheckboxChange('rifel', isChecked)}
        />
      )}
      {selectedOption === 'Battle Royal' && (
        <Checkbox
          label="Grenade"
          name="checkbox3"
          checked={data.grenade}
          onChange={(isChecked) => handleCheckboxChange('grenade', isChecked)}
        />
      )}
      <br />
      <button onClick={onPrev}>Previous</button>
      <button onClick={onNext}>Next</button>
    </div>
  );
};

export default Page2;
