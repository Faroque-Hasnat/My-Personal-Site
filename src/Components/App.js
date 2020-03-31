import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Main from './Main';
import Navbar from './Nav-section/Navbar'
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route path="/" component={Main} exact/>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
