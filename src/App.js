import React, { Component } from 'react';
import  Navbar from './components/Navbar';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Post from './components/Post';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App container-fluid p-0">
       <Navbar/>
        <div className="container pt-5">
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/:post_id' component={Post} />
            </Switch>
        </div>

      </div>
      </BrowserRouter>
    );
  }
}

export default App;
