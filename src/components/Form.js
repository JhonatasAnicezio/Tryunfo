import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input, { inputNumber } from './forms/Input';
import Select from './forms/Select';
import Textarea from './forms/Textarea';
import './Form.css';

class Form extends Component {
  render() {
    const { values, onInputChange, onSaveButtonClick } = this.props;
    const {
      cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo,
      isSaveButtonDisabled, //hasTrunfo
    } = values;
    const arrAttr = [ cardAttr1, cardAttr2, cardAttr3 ];

    return (
      <form className='container-Form' >
        <h1>Adicionar nova carta</h1>
        <Input
          type='text'
          text='Nome'
          name='cardName'
          value={ cardName }
          func={ onInputChange }
          placeholder='nome da carta'
        />
        <Textarea
          text='Descrição'
          name='cardDescription'
          value={ cardDescription }
          func={ onInputChange }
          placeholder='descrição da carta'
        />
        { inputNumber.map((input, index) =>
          <Input
            key={ index }
            type='number'
            text={`Attr0${ input } `}
            name={`cardAttr${ input }`}
            value={ arrAttr[index] }
            func={ onInputChange }
            placeholder={`valor attr${ input }`}
          /> 
        ) }
        <Input
          type='text'
          text='Imagem'
          name='cardImage'
          value={ cardImage }
          func={ onInputChange }
          placeholder='endereço da imagem'
        />
        <Select
          text='Raridade'
          name='cardRare'
          value={ cardRare }
          func={ onInputChange }
          options={[ 'normal', 'raro', 'muito raro' ]}
        />
        <Input
          type='checkbox'
          text='super trunfo'
          name='cardTrunfo'
          value={ cardTrunfo }
          func={ onInputChange }
        />
        <button
          type='button'
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  values: PropTypes.shape({
    cardName: PropTypes.string.isRequired,
    cardDescription: PropTypes.string.isRequired,
    cardAttr1: PropTypes.string.isRequired,
    cardAttr2: PropTypes.string.isRequired,
    cardAttr3: PropTypes.string.isRequired,
    cardImage: PropTypes.string.isRequired,
    cardRare: PropTypes.string.isRequired,
    cardTrunfo: PropTypes.bool.isRequired,
    hasTrunfo: PropTypes.bool.isRequired,
    isSaveButtonDisabled: PropTypes.bool.isRequired,
  }),
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
