import React, { Component } from "react";

import './app.css';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PeplePage from "../people-page/people-page";
import ErrorIndicator from '../error-indicator';
import ErrorButton from "../error-button";
import ItemList from "../item-list";
// import PersonDetails from "../person-details";

import SwapiService from "../../services/swapi-service";

export default class App extends Component {

  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true,
    hasError: false
  }

  // toggleRandomPlanet = () => {
  //   this.setState({
  //     showRandomPlanet: false
  //   });
  // }

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

    const { showRandomPlanet } = this.state;

    const planet = showRandomPlanet ? <RandomPlanet/> : null;

    return (
      <div className='app container'>
        <Header/>

        { planet }

        <button className='toggle-planet btn btn-warning btn-lg mx-2'
                // onClick={ this.toggleRandomPlanet }
        >
          Toggle Random Planet
        </button>

        <ErrorButton />

        <PeplePage />

        <div className='people-page row'>
          <div className='col-6'>
            <ItemList
              onItemSelected={ this.onPersonSelected }
              getData={ this.swapiService.getAllPlanets }
              renderItems={ (item) => item.name }
            />
          </div>
        </div>

        <div className='people-page row'>
          <div className='col-6'>
            <ItemList
              onItemSelected={ this.onPersonSelected }
              getData={ this.swapiService.getAllStarships }
              renderItems={ (item) => item.name }
            />
          </div>
        </div>

      </div>
    )
  }
};