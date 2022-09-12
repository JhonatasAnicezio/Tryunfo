import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Card.css';

class Card extends Component {
  render() {
    const { values } = this.props;
    const {
      cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo 
    } = values;
    const atributes = [ cardAttr1, cardAttr2, cardAttr3 ];
    return(
      <div className='container-Card'>
        <div className='header-Card'>
          <h2>{ cardName }</h2>
          <p>{ cardRare }</p>
        </div>
        <div className='image-Card'>
          <img
            src={ cardImage }
            alt={`imagem de ${ cardImage }`}
          />
          { cardTrunfo && <p>Super Trunfo</p> }
        </div>
        <div className='description-Card'>
          <p>{ cardDescription }</p>
          <ol>
            { atributes.map((attr, index) =>
              <li key={ index }>{ attr }</li>
            ) }
          </ol>
        </div>
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
