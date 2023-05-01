import React from 'react';

function InputField(props) {
  const { value, onChange, placeholder, disabled } = props;

  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      pattern="[0-9]*"
    />
  );
}

export default InputField;
