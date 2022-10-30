import React, { Component } from "react";

import './app.css';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list'
import PersonDetails from '../person-details'
import ErrorIndicator from '../error-indicator'

export default class App extends Component {

  state = {
    showRandomPlanet: true,
    selectedPerson: 5,
    hasError: false
  }

  // toggleRandomPlanet = () => {
  //   this.setState({
  //     showRandomPlanet: false
  //   });
  // }

  onPersonSelected = (id) => {
    this.setState( {
      selectedPerson: id
    })
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true
    })
  }

  render() {

    if (this.state.hasError) {
      return (
        <ErrorIndicator />
      )
    }

    const { showRandomPlanet, selectedPerson } = this.state;

    const planet = showRandomPlanet ? <RandomPlanet/> : null;

    return (
      <div className='app container'>
        <Header/>

        { planet }

        <button className='toggle-planet btn btn-warning btn-lg mb-4'
                // onClick={ this.toggleRandomPlanet }
        >
          Toggle Random Planet
        </button>

        <div className='row'>
          <div className='col-6'>
            <ItemList onItemSelected={ this.onPersonSelected }/>
          </div>
          <div className='col-6'>
            <PersonDetails personId={ selectedPerson }/>
          </div>
        </div>
      </div>
    )
  }
};