import React, { Component } from 'react';
import {Menu} from './components/Menu'
import {Content} from './components/Content'
import {Jumbo} from './components/Jumbo'
import {Footer} from './components/Footer'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <Jumbo />

        <Content />

        <Footer />
      </div>
    );
  }
}

export default App;
