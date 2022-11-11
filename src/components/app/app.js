import React, { Component } from "react";

import './app.css';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PeplePage from "../people-page/people-page";
import ErrorIndicator from '../error-indicator';
import ErrorButton from "../error-button";
import ItemDetails, { Record } from "../item-details";
import Row from "../row";

import SwapiService from "../../services/swapi-service";
import {
  PersonList,
  PlanetList,
  StarshipList,
  PersonDetails,
  PlanetDetails,
  StarshipDetails
} from "../sw-components";

import {
  SwapiSericeProvider,
  SwapiSericeConsumer
} from "../swapi-service-context/swapi-service-context";

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

    const { getPerson, getStarship, getPersonImage, getStarshipImage } = this.swapiService;

    // const personDetails = (
    //   <ItemDetails
    //     itemId={ 11 }
    //     getData={ getPerson }
    //     getImageUrl={ getPersonImage }
    //   >
    //
    //     <Record field="gender" label="Gender" />
    //     <Record field="eyeColor" label="Eye Color" />
    //
    //   </ItemDetails>
    // );
    //
    // const starshipDetails = (
    //   <ItemDetails
    //     itemId={ 5 }
    //     getData={ getStarship }
    //     getImageUrl={ getStarshipImage }
    //     >
    //
    //     <Record field="model" label="Model" />
    //     <Record field="length" label="Length" />
    //     <Record field="costInCredits" label="Cost" />
    //
    //   </ItemDetails>
    // )

    return (
      <SwapiSericeProvider value={ this.swapiService }>
        <div className='app container'>
        <Header/>

        { planet }

        <button className='toggle-planet btn btn-warning btn-lg mx-2'
                // onClick={ this.toggleRandomPlanet }
        >
          Toggle Random Planet
        </button>

        <ErrorButton />

        {/*<PeplePage />*/}

        <PersonDetails itemId={ 5 } />
        <PlanetDetails itemId={ 6 } />
        <StarshipDetails itemId={ 9 } />

        <PersonList
          onItemSelected={ this.onPersonSelected }
        />

        <PlanetList
          onItemSelected={ this.onPersonSelected }
        />

        <StarshipList
          onItemSelected={ this.onPersonSelected }
        />

        {/*<Row left={ personDetails }*/}
        {/*     right={ starshipDetails }*/}
        {/*/>*/}

      </div>
      </SwapiSericeProvider>
    )
  }
};