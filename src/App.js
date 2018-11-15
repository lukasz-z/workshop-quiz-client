import React, { Component } from 'react';
import './App.css';
import './styles/normalize.css';
import './styles/skeleton.css';
import Title from './components/Title';

class App extends Component {
  render() {
    return (
      <div className="main-app container">
        <Title title={'React Workshop'} subtitle={'A pop quiz'} />
      </div>
    );
  }
}

export default App;
