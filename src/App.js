import React, { Component } from 'react';
import Form from './components/Form';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cardName:'',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: false,
    };
  }

  handleOnChange = async ({ target }) => {
    const { name, value, type, checked } = target;
    this.setState({ [name] : type === 'checkbox' ? checked : value });
  };

  saveNewCard = () => {
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <Form
          values={ this.state }
          onInputChange={ this.handleOnChange }
          onSaveButtonClick={ this.saveNewCard }
        />
      </div>
    );
  }
}

export default App;
