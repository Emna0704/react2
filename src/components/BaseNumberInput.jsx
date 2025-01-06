import React from "react";

const BaseNumberInput = ({ label, value, onChangeBase }) => {
  const handleChange = (event) => {
    onChangeBase(event.target.value);
  };

  return (
    <div>
      <label>
        {label} :
        <input
          type="text"
          value={value}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

export default BaseNumberInput;
