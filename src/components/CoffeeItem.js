import React from 'react';
import { Link } from 'react-router-dom';
import coffeeLanding from '../assets/coffee.png';

class CoffeeItem extends React.Component {
  render() {
    return (
      <div className="coffee-item">
        <Link to="/coffees/coffee">
          <img src={coffeeLanding} style={{width: '100%'}}/>
        </Link>
      </div>
    );
  }
}

export default CoffeeItem;
