import React from "react";

const Input = ({ label, type, name, onChange, placeholder, required,value }) => {
  return (
    <div className="input">
      <label className="label">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default Input;
