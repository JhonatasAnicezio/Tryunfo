import React from 'react';
import PropTypes from 'prop-types';

function Select({ text, name, func, value, options }) {
  return (
    <div className={ `container-${name}` } >
      <label htmlFor={ name }>{ text }</label>
      <select
        value={ value }
        name={ name }
        id={ name }
        onChange={ func }
      >
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
};

export default Select;
