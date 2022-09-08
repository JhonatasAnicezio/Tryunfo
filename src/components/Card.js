import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    const { values } = this.props;
    const {
      cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo 
    } = values;
    return(
      <div>
        <h1>{ cardName }</h1>
        <p>{ cardRare }</p>
        <img
          src={ cardImage }
          alt={`imagem de ${ cardImage }`}
        />
        <p>{ cardTrunfo }</p>
        <p>{ cardDescription }</p>
        <p>{ cardAttr1 }</p>
        <p>{ cardAttr2 }</p>
        <p>{ cardAttr3 }</p>
      </div>
    );
  }
}

Card.propTypes = {
  values: PropTypes.shape({
    cardName: PropTypes.string.isRequired,
    cardDescription: PropTypes.string.isRequired,
    cardAttr1: PropTypes.string.isRequired,
    cardAttr2: PropTypes.string.isRequired,
    cardAttr3: PropTypes.string.isRequired,
    cardImage: PropTypes.string.isRequired,
    cardRare: PropTypes.string.isRequired,
    cardTrunfo: PropTypes.bool.isRequired,
  }),
};

export default Card;
