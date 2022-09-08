import React from 'react';
import PropTypes from 'prop-types';

function Input({ type, text, name, func, value, placeholder }) {
  return (
    <div className={ `container-${name}` } >
      <label htmlFor={ name }>{ text }</label>
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
    PropTypes.number,
    PropTypes.bool,
  ]).isRequired,
  placeholder: PropTypes.string,
};

export const inputNumber = ['1','2','3'];
export default Input;
