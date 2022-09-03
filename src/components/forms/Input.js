import React from 'react';
import PropTypes from 'prop-types';

function Input({ type, text, name, func, value, placeholder }) {
  return (
    <div>
      <label htmlFor={ name }>{ text }:</label>
      <input
        type={ type }
        id={ name }
        name={ name }
        value={ value }
        onChange={ func }
        placeholder={ placeholder }
      />
    </div>
  );
}

Input.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default Input;
