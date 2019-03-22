import React from 'react';
import { Link } from 'react-router-dom';
import coffeeLanding from '../assets/coffee.svg';

class CoffeeItem extends React.Component {
  render() {
    return (
      <div className="coffee-item">
        <Link to="/coffees/coffee">
          <img src={coffeeLanding}/>
        </Link>
      </div>
    );
  }
}

export default CoffeeItem;
