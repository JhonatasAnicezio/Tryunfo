import React, { Component } from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';

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
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      cards: [],
    };
  }

  handleOnChange = async ({ target }) => {
    const { name, value, type, checked } = target;
    await this.setState({ [name] : type === 'checkbox' ? checked : value });
    await this.setState({ isSaveButtonDisabled: this.buttonDisabled() });
  };

  buttonDisabled = () => {
    const {
      cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare
    } = this.state;

    const max = 90;
    const soma = 210;
    const min = 0;

    const attr1 = Number(cardAttr1);
    const attr2 = Number(cardAttr2);
    const attr3 = Number(cardAttr3);

    if (
      cardName.length > 0
      && cardDescription.length > 0
      && cardImage.length > 0
      && cardRare.length > 0
      && attr1 <= max && attr1 >= min
      && attr2 <= max && attr2 >= min
      && attr3 <= max && attr3 >= min
      && attr1 + attr2 + attr3 <= soma
    ) {
      return false ;
    }
    return true;
  };

  saveNewCard = async () => {
    const {
      cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo, cards,
    } = this.state;

    const objCart = {
      cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo,
    };

    this.verifyTrunfo();

    this.setState({
      cardName:'',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      cards: [...cards, objCart ]
    });
  };

  verifyTrunfo = () => {
    const { cardTrunfo } = this.state;
    if (cardTrunfo) {
      this.setState({ hasTrunfo: true });
    }
  };

  render() {
    const { cards } = this.state;
    return (
      <div className='container'>
        <Form
          values={ this.state }
          onInputChange={ this.handleOnChange }
          onSaveButtonClick={ this.saveNewCard }
        />
        <Card
          values={ this.state }
        />
        { cards.map((card, index) => 
          <Card
            key={ index }
            values={ card }
          />
        ) }
      </div>
    );
  }
}

export default App;
