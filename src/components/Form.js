import React, { Component } from 'react';
import Input, { inputNumber } from './forms/Input';
import Select from './forms/Select';
import Textarea from './forms/Textarea';

class Form extends Component {
  render() {
    return (
      <form className='container-Form' >
        <Input
          type='text'
          text='Nome'
          name='inputName'
          placeholder='nome da carta'
        />
        <Textarea
          text='Descrição'
          name='inputDescription'
          placeholder='descrição da carta'
        />
        { inputNumber.map((input, index) =>
          <Input
            key={ index }
            type='number'
            text={`atributo ${ input }`}
            name={`atributo${ input }`}
            placeholder={`valor attr ${ input }`}
          /> 
        ) }
        <Input
          type='text'
          text='Imagem'
          name='inputImage'
          placeholder='endereço da imagem'
        />
        <Select
          text='Raridade'
          name='inputRare'
          value={['normal', 'raro', 'muito raro']}
          placeholder='selecione a raridade'
        />
        <Input
          type='checkbox'
          text='super trunfo'
          name='inputTrunfo'
        />
        <button>Salvar</button>
      </form>
    );
  }
}

export default Form;
