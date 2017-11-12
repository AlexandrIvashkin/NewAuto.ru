import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';

import './style/App.css';

import Home from './components/home/home';
import Model from './components/model/model-index';
import Notes from './components/notes/notes-index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <header className="App-header">
              <nav className= "App-nav">
                <Link to='/'>Главная</Link>
                <Link to='/model'>Модели автомобилей</Link>
                <Link to='/notes'>Публикации</Link>
              </nav>
            </header>
            <div className= "App-content">         
              <Route exact path='/' component ={Home} />
              <Route exact path='/model' component ={Model} />
              <Route exact path='/notes' component ={Notes} />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
