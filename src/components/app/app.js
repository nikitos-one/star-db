import React, {Component} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import './app.css';

import ErrorBoundry from "../error-boundry";
import Header from '../header';
import RandomPlanet from '../random-planet';
import {
  PeoplePage,
  PlanetPage,
  StarshipsPage,
  LoginPage,
  SecretPage
} from "../pages";

import StarshipDetails from "../sw-components/starship-details";

import SwapiService from "../../services/swapi-service";
import DummySwapiService from "../../services/dummy-swapi-service";

import { SwapiSericeProvider } from "../swapi-service-context/";

export default class App extends Component {

  state = {
    showRandomPlanet: true,
    swapiService: new SwapiService(),
    hasError: false,
    isLoggedIn: false
  }

  onLogin = () => {
    this.setState({
      isLoggedIn: true
    });
  };

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

    const {showRandomPlanet, isLoggedIn} = this.state;

    const planet = showRandomPlanet ? <RandomPlanet /> : null;

    return (
      <ErrorBoundry>
        <SwapiSericeProvider value={this.state.swapiService}>
          <Router>
            <div className='app container'>

              <Header onServiceChange={this.onSericeChange}/>

              {planet}
              <Routes>
                <Route index element={<h2>Welcome to StarDB</h2>} />
                <Route path="people">
                  <Route index element={<PeoplePage />} />
                  <Route path=":itemId" element={<PeoplePage />} />
                </Route>
                <Route path="planets" element={<PlanetPage />} />
                <Route path="starships" element={<StarshipsPage />} />
                <Route path="starships/:itemId" element={<StarshipDetails />} />
                <Route path="login" element={
                  <LoginPage
                    isLoggedIn={isLoggedIn}
                    onLogin={this.onLogin}
                  />
                } />
                <Route path="secret" element={
                  <SecretPage isLoggedIn={isLoggedIn} />
                } />
                <Route path="*" element={<h2>Page not found</h2>} />
              </Routes>

            </div>
          </Router>
        </SwapiSericeProvider>
      </ErrorBoundry>
    )
  }
};