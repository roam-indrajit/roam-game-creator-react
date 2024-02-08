import React from 'react';

const Checkbox = ({ label, name, checked, onChange }) => {
  return (
    <div>
      <label>
        {label}:
        <input
          type="checkbox"
          name={name}
          checked={checked}
          onChange={onChange}
        />
      </label>
    </div>
  );
};

export default Checkbox;
