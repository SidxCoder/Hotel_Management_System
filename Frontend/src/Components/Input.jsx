import React from "react";

const Input = ({ label, type, name, onChange, placeholder, required }) => {
  return (
    <div className="input">
      <label className="label">{label}</label>
      <input
        type={type}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default Input;
