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
      cardRare: '',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    };
  }

  handleOnChange = async ({ target }) => {
    const { name, value } = target;
    await this.setState({ [name] : value });
    console.log( this.state );
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
