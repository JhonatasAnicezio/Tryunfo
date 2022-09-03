import React from 'react';
import PropTypes from 'prop-types';

function Textarea({ text, name, onChange, value, placeholder }) {
  return (
    <div>
      <label htmlFor={ name }>{ text }</label>
      <textarea
        id={ name }
        name={ name }
        value={ value }
        onChange={ onChange }
        placeholder={ placeholder }
      />
    </div>
  );
}

Textarea.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default Textarea;
