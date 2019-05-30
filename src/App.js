import React, { Component } from 'react';
import { Container } from 'react-bootstrap'
import './App.css';
import Header from './components/Header.js';
import InputForm from './components/InputForm.js';
import Results from './components/Results.js';
import DataTable from './components/DataTable.js';


class App extends Component {

  render() {

    return (
      <div className="App">
        <Container>
          <Header />
          <InputForm />
          <Results />
          <DataTable />
        </Container>
      </div>
    );
  }
}

export default App;
