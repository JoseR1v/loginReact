import React from 'react';
import PropTypes from 'prop-types';
import './input.css';

const Input = ({ label, type = 'text', value, onChange, placeholder = '', disabled = false, className = '', ...props }) => {
  return (
    <>
        <p>{label}</p>
        <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className={`custom-input ${className}`}
        {...props}
        />
    </>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

export default Input;
