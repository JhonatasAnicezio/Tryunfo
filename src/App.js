import React, { Component } from 'react';
import Form from './components/Form';
import Card from './components/Card';
import Button from './components/forms/Button';
import { game_of_Cards } from './services';
import './App.css';
import Input from './components/forms/Input';

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
      cards: game_of_Cards,
      filter: '',
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

    const objCard = {
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
      cards: [...cards, objCard ]
    });
  };

  verifyTrunfo = () => {
    const { cardTrunfo } = this.state;
    if (cardTrunfo) {
      this.setState({ hasTrunfo: true });
    }
  };

  deleteCard = (card) => {
    const { cards } = this.state;
    const newList = cards;
    newList.splice(cards.indexOf(card), 1);
    this.setState({ cards: newList });

    card.cardTrunfo && this.setState({ hasTrunfo: false });
  };

  filterCard = () => {
    const { cards, filter } = this.state;
    const required = cards.filter((card) => card.cardName.includes(filter));
    
    return required;
  };

  render() {
    const { filter } = this.state;
    return (
      <div className='container-main'>
        <div className='container-create'>
          <Form
            values={ this.state }
            onInputChange={ this.handleOnChange }
            onSaveButtonClick={ this.saveNewCard }
          />
          <Card
            values={ this.state }
          />
        </div>
        <Input
          text='Filtros de Busca'
          type='text'
          id='search'
          name='filter'
          value={ filter }
          func={ this.handleOnChange }
          placeholder='digite o nome da carta'
        />
        <div
          className='container-listCards'
        >
          { this.filterCard().map((card, index) =>
            <div
              className='card'
              key={ index }
            >
              <Card
                values={ card }
              />
              <Button
                type='button'
                text='Excluir'
                disabled={ false }
                onClick={ () => this.deleteCard(card) }
              />
            </div>
          ) }
        </div>
      </div>
    );
  }
}

export default App;
