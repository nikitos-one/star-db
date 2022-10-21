import React from "react";

import './app.css';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list'
import PersonDetails from '../person-details'

const App = () => {
  return (
    <div className='app container'>
      <Header />
      <RandomPlanet />

      <div className='row'>
        <div className='col-6'>
          <ItemList />
        </div>
        <div className='col-6'>
          <PersonDetails />
        </div>
      </div>
    </div>
  )
}

export default App