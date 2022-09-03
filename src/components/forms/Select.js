import React from 'react';
import PropTypes from 'prop-types';

function Select({ text, name, func, value, placeholder }) {
  return (
    <div>
      <label htmlFor={ name }>{ text }</label>
      <select name={ name } id={ name } onChange={ func }>
        <option disabled selected>{ placeholder }</option>
        { value.map((val, index) => 
          <option
            value={ val }
            key={ index }
          >
            { val }
          </option>
        ) }
      </select>
    </div>
  );
}

Select.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
  value: PropTypes.arrayOf(PropTypes.string).isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default Select;
