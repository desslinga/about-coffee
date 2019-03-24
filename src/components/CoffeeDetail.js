import React from 'react';
import coffeeLanding from '../assets/coffee.png';

class Landing extends React.Component {
  render() {
    return (
      <div className="container" id="landing">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-7">
            <img className="coffee-image" src={coffeeLanding}/>
          </div>
          <div className="col-12 col-sm-6 col-md-5 coffee-greeting">
            <div className="content">
              <h2>MACCHIATO</h2>
              <span>
              <b>Origin:</b> Italy
              <br/>
              <b>Ingredients:</b> Milk, Foam, Espresso
              <br/>
              </span>
              <span className="lighter">
                sometimes called espresso macchiato,
                is an espresso coffee drink with a
                small amount of milk, usually foamed.
                In Italian, macchiato means "stained"
                or "spotted".
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
