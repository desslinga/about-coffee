import React from 'react';
import coffeeLanding from '../assets/coffee.svg';

class CoffeeItem extends React.Component {
  render() {
    return (
      <div className="coffee-item">
        <img src={coffeeLanding}/>
      </div>
    );
  }
}

export default CoffeeItem;
