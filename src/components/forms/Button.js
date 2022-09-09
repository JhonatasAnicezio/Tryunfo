import React from 'react';
import PropTypes from 'prop-types';

function Button({ type, text, disabled, onClick }) {
  return (
    <>
      { disabled ? (
        <button
          className='grey'
          type={ type }
          disabled={ disabled }
          onClick={ onClick }
        >
          { text }
        </button>
      ) : (
        <button
          className='blue'
          type={ type }
          disabled={ disabled }
          onClick={ onClick }
        >
          { text }
        </button>
      ) }
    </>
  );
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
