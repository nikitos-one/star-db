import React from "react";
import ItemList from "../item-list";
import { withData, withSwapiService } from "../hoc-helpers";

const withChildFunction = (Wrapped, fn) => {
  return (props) => {
    return (
      <Wrapped { ...props } >
        { fn }
      </Wrapped>
    )
  }
};

const renderPerson= ({ name, gender, birthYear }) => `${name} (${gender}, ${birthYear})`;
const renderPlanet = ({ name }) => `${name}`;
const renderStarship = ({ model, name }) => `${name} (${model})`;

const mapPersonMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPeople
  }
}

const PersonList = withSwapiService(
  withData(
    withChildFunction(
      ItemList,
      renderPerson
    )
  ),
  mapPersonMethodsToProps
);

const mapPlanetMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPlanets
  }
}

const PlanetList = withSwapiService(
  withData(
    withChildFunction(
      ItemList,
      renderPlanet
    )
  ),
  mapPlanetMethodsToProps
);

const mapStarshipMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllStarships
  }
}

const StarshipList = withSwapiService(
  withData(
    withChildFunction(
      ItemList,
      renderStarship
    )
  ),
  mapStarshipMethodsToProps
);

export {
  PersonList,
  PlanetList,
  StarshipList
};