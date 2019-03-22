import React from 'react';
import CoffeeItem from './CoffeeItem';

class CoffeeList extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <h2>about coffee</h2>
            <h3>click on a cup to know more!</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-6 col-md-4">
            <CoffeeItem/>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <CoffeeItem/>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <CoffeeItem/>
          </div>
        </div>
      </div>
    );
  }
}

export default CoffeeList;
