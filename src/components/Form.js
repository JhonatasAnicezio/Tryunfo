import React, { Component } from 'react';
import Input, { inputNumber } from './forms/Input';
import Select from './forms/Select';
import Textarea from './forms/Textarea';

class Form extends Component {
  render() {
    return (
      <form>
        <Input
          type='text'
          text='Nome'
          name='input-name'
          placeholder='nome da carta'
        />
        <Textarea
          text='Descrição'
          name='input-description'
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
          name='input-image'
          placeholder='endereço da imagem'
        />
        <Select
          text='Raridade'
          name='input-rare'
          value={['normal', 'raro', 'muito raro']}
          placeholder='selecione a raridade'
        />
        <Input
          type='checkbox'
          text='super trunfo'
          name='input-trunfo'
        />
        <button>Salvar</button>
      </form>
    );
  }
}

export default Form;
