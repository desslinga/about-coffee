import React from 'react';
import { Link } from 'react-router-dom'
import coffeeLanding from '../assets/coffee.svg';

class Landing extends React.Component {
  state = {
    landingClasses: "container"
  };

  componentWillUnmount = () => {
    this.setState({
      landingClasses: "container exit"
    });
  };

  render() {
    return (
      <div className={this.state.landingClasses} id="landing">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-7">
            <img className="coffee-image" src={coffeeLanding}/>
          </div>
          <div className="col-12 col-sm-6 col-md-5 coffee-greeting">
            <div className="content">
              <h1 className="title">about<br/>coffee</h1>
              <button className="btn btn-big">
                <Link to="/coffees">
                  enter
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
