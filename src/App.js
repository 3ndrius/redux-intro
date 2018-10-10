import React, { Component } from 'react';
import  Navbar from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div className="App container-fluid p-0">
       <Navbar/>
        <div className="container">
          
        </div>

      </div>
    );
  }
}

export default App;
