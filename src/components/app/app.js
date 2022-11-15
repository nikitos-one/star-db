import React, {Component} from "react";

import './app.css';

import ErrorBoundry from "../error-boundry";
import Header from '../header';
import RandomPlanet from '../random-planet';
import {
  PeoplePage,
  PlanetPage,
  StarshipsPage
} from "../pages";

import SwapiService from "../../services/swapi-service";
import DummySwapiService from "../../services/dummy-swapi-service";

import { SwapiSericeProvider } from "../swapi-service-context/";

export default class App extends Component {

  state = {
    showRandomPlanet: true,
    swapiService: new DummySwapiService(),
    hasError: false
  }

  onSericeChange = () => {
    this.setState(({swapiService}) => {
      const Service = swapiService instanceof SwapiService ? DummySwapiService : SwapiService;

      return {
        swapiService: new Service()
      }
    });
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true
    })
  }

  render() {

    const {showRandomPlanet} = this.state;

    const planet = showRandomPlanet ? <RandomPlanet /> : null;

    return (
      <ErrorBoundry>
        <SwapiSericeProvider value={this.state.swapiService}>
          <div className='app container'>

            <Header onServiceChange={this.onSericeChange}/>

            {planet}

            <PeoplePage />
            <PlanetPage />
            <StarshipsPage />

          </div>
        </SwapiSericeProvider>
      </ErrorBoundry>
    )
  }
};