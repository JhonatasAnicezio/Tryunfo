import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input, { inputNumber } from './forms/Input';
import Select from './forms/Select';
import Textarea from './forms/Textarea';
import Button from './forms/Button';
import './Form.css';

class Form extends Component {
  render() {
    const { values, onInputChange, onSaveButtonClick } = this.props;
    const {
      cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo,
      isSaveButtonDisabled, hasTrunfo
    } = values;
    const arrAttr = [ cardAttr1, cardAttr2, cardAttr3 ];

    return (
      <form className='container-Form' >
        <div className='title-form'>
          <h2>Adicionar nova carta</h2>
        </div>
        <div className='container-inputs'>
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
          { hasTrunfo ?
            (<p>Você já tem um Super Trunfo em seu baralho</p>) :
            (
              <Input
                type='checkbox'
                text='super trunfo'
                name='cardTrunfo'
                value={ cardTrunfo }
                func={ onInputChange }
              />
            )
          }
          <div className='container-button'>
            <Button
              type='button'
              text='Salvar'
              disabled={ isSaveButtonDisabled }
              onClick={ onSaveButtonClick }
            />
          </div>
        </div>
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
