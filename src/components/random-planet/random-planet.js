import React, {Component} from "react";

import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

import './random-planet.css';

export default class RandomPlanet extends Component {

  constructor(props) {
    super(props);

    this.updatePlanet();
  }

  swapiService = new SwapiService();

  state = {
   planet: {},
    loading: true
  };

  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      loading: false,
      error: false
    });
  };

  onError = () => {
    this.setState({
      loading: false,
      error: true
    });
  };

  updatePlanet () {
    const id = Math.floor(Math.random() * 25) + 2;

    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError)
  };

  render() {

    const { planet, loading, error } = this.state;

    const hasData = !(loading || error);

    const errorMessage = error ? <ErrorIndicator/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = hasData ? <PlanetVeiw planet={ planet } /> : null;

    return (
      <div className='random-planet card rounded mb-4'>
        { errorMessage }
        { spinner }
        { content }
      </div>
    )
  }
}

const PlanetVeiw = ({ planet }) => {

  const { id, name, population, rotationPeriod, diameter } = planet;

  return (
    <div className="row">
      <div className='col-auto planet-image'>
        <img
          src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
          alt=""/>
      </div>
      <div className='col-auto planet-info'>
        <h4>{name}</h4>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>
            <span className='term'>Population</span>
            <span>{population}</span>
          </li>
          <li className='list-group-item'>
            <span className='term'>Rotation Period</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className='list-group-item'>
            <span className='term'>Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </div>
  )
}