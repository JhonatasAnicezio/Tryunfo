import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input, { inputNumber } from './forms/Input';
import Select from './forms/Select';
import Textarea from './forms/Textarea';
import './Form.css';

class Form extends Component {
  render() {
    const { 
      cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo,
      isSaveButtonDisabled, onInputChange, //*onSaveButtonClick, hasTrunfo
    } = this.props;
    const arrAttr = [ cardAttr1, cardAttr2, cardAttr3 ];
    return (
      <form className='container-Form' >
        <h1>Adicionar nova carta</h1>
        <Input
          type='text'
          text='Nome'
          name='inputName'
          value={ cardName }
          onChange={ onInputChange }
          placeholder='nome da carta'
        />
        <Textarea
          text='Descrição'
          name='inputDescription'
          value={ cardDescription }
          onChange={ onInputChange }
          placeholder='descrição da carta'
        />
        { inputNumber.map((input, index) =>
          <Input
            key={ index }
            type='number'
            text={`Attr0${ input } `}
            name={`atributo${ input }`}
            value={ arrAttr[index] }
            onChange={ onInputChange }
            placeholder={`valor attr ${ input }`}
          /> 
        ) }
        <Input
          type='text'
          text='Imagem'
          name='inputImage'
          value={ cardImage }
          onChange={ onInputChange }
          placeholder='endereço da imagem'
        />
        <Select
          text='Raridade'
          name='inputRare'
          value={ cardRare }
          onChange={ onInputChange }
          placeholder='selecione a raridade'
          options={[ 'normal', 'raro', 'muito raro' ]}
        />
        <Input
          type='checkbox'
          text='super trunfo'
          name='inputTrunfo'
          value={ cardTrunfo }
          onChange={ onInputChange }
        />
        <button
          type='button'
          onClick={ isSaveButtonDisabled }
        >Salvar</button>
      </form>
    );
  }
}

Form.propTypes = {
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
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
