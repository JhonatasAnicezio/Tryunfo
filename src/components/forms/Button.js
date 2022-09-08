import React from 'react';
import PropTypes from 'prop-types';

function Button({ type, disabled, onClick }) {
  return (
    <>
      { disabled ? (
        <button
          className='grey'
          type={ type }
          disabled={ disabled }
          onClick={ onClick }
        >
          Salvar
        </button>
      ) : (
        <button
          className='blue'
          type={ type }
          disabled={ disabled }
          onClick={ onClick }
        >
          Salvar
        </button>
      ) }
    </>
  );
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
