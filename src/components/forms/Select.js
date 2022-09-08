import React from 'react';
import PropTypes from 'prop-types';

function Select({ text, name, func, value, placeholder, options }) {
  return (
    <div className={ `container-${name}` } >
      <label htmlFor={ name }>{ text }</label>
      <select name={ name } id={ name } onChange={ func }>
        <option defaultValue={ value } disabled selected>{ placeholder }</option>
        { options.map((opt, index) =>
          <option
            name={ opt }
            key={ index }
          >
            { opt }
          </option>
        ) }
      </select>
    </div>
  );
}

Select.propTypes = {
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default Select;
