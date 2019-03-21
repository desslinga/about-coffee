import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/styles.scss';

import coffeeLanding from '../assets/coffee.svg';

class App extends React.Component {
  render() {
    return (
        <div className="container" id="landing">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-7">
              <img className="coffee-image" src={coffeeLanding}/>
            </div>
            <div className="col-12 col-sm-6 col-md-5 coffee-greeting">
              <div class="content">
                <h1 className="title">about<br/>coffee</h1>
                <button className="btn btn-big">
                  ENTER
                </button>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default App;
