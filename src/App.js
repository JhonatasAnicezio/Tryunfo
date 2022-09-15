import React, { Component } from 'react';
import Form from './components/Form';
import Card from './components/Card';
import Button from './components/forms/Button';
import './App.css';
import Input from './components/forms/Input';
import Select from './components/forms/Select';
import { game_of_Cards } from './services';

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
      searchRare: 'todas',
      checkTrunfo: false,
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
    const { cards, filter, searchRare, checkTrunfo } = this.state;
    const required = cards.filter((card) => {
      const cardL = card.cardName.toLowerCase();
      const filt = filter.toLowerCase();
      return cardL.includes(filt);
    });
    if (checkTrunfo) {
      return required.filter((card) => card.cardTrunfo === true);
    } return required.filter((cards) => {
      if (searchRare === 'todas') {
        return required;
      } return cards.cardRare === searchRare;
    });
  };

  render() {
    const { filter, searchRare, checkTrunfo } = this.state;
    return (
      <div className='container-main'>
        <h1>Tryunfo</h1>
        <div className='container-body'>
          <div>
            <div className='container-formFilter'>
              <Form
                values={ this.state }
                onInputChange={ this.handleOnChange }
                onSaveButtonClick={ this.saveNewCard }
              />
              <div className='container-filters'>
                <div className='container-inputsFilts'>
                  <Input
                    text='Filtros de Busca'
                    type='text'
                    id='search'
                    name='filter'
                    value={ filter }
                    func={ this.handleOnChange }
                    placeholder='digite o nome da carta'
                  />
                  <Select
                    text='Selecione raridade'
                    name='searchRare'
                    func={ this.handleOnChange }
                    value={ searchRare }
                    options={['todas', 'normal', 'raro', 'muito raro']}
                  />
                  <Input
                    text='Super Trunfo'
                    type='checkbox'
                    id='searchTrunfo'
                    name='checkTrunfo'
                    value={ checkTrunfo }
                    func={ this.handleOnChange }
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='container-render'>
            <div className='container-title'>
              <h2>Pré-visualização</h2>
            </div>
            <Card
              values={ this.state }
            />
          </div>
        </div>
        <div className='title-list'>
          <h2>Todas as Cartas</h2>
        </div>
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
