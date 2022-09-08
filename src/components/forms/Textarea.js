import React from 'react';
import PropTypes from 'prop-types';

function Textarea({ text, name, func, value, placeholder }) {
  return (
    <div className={ `container-${name}` } >
      <label htmlFor={ name }>{ text }</label>
      <textarea
        id={ name }
        name={ name }
        value={ value }
        onChange={ func }
        placeholder={ placeholder }
      />
    </div>
  );
}

Textarea.propTypes = {
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default Textarea;
