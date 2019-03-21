import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './Landing';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/styles.scss';


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" exact component={Landing}/>
      </BrowserRouter>
    );
  }
}

export default App;
