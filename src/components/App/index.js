import React, { Component } from 'react';
import Header from '../Header/index';
import Form from '../Form/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <Header />
        </header>
        <div className="form">
          <Form />
        </div>
      </div>
    );
  }
}

export default App;
