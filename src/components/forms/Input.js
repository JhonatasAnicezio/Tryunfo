import React from 'react';
import PropTypes from 'prop-types';

function Input({ text, type, name, onChange, value }) {
  return (
    <div>
      <label htmlFor={ name }>{ text }:</label>
      <input
        type={ type }
        id={ name }
        value={ value }
        onChange={ onChange }
        placeholder={ name }
      />
    </div>
  );
}

Input.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
};

export default Input;
