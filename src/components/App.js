import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from './Landing';
import CoffeeList from './CoffeeList';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/styles.scss';


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Landing}/>
          <Route path="/coffees" exact component={CoffeeList}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
