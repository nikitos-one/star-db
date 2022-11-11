import React from "react";
import ItemList from "../item-list";
import { withData } from "../hoc-helpers";
import SwapiService from "../../services/swapi-service";

const swapiServie = new SwapiService();

const {
  getAllPeople,
  getAllPlanets,
  getAllStarships
} = swapiServie;

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

const PersonList = withData(
  withChildFunction(
    ItemList,
    renderPerson
  ),
  getAllPeople
);
const PlanetList = withData(
  withChildFunction(
    ItemList,
    renderPlanet
  ),
  getAllPlanets);
const StarshipList = withData(
  withChildFunction(
    ItemList,
    renderStarship
  ),
  getAllStarships);

export {
  PersonList,
  PlanetList,
  StarshipList
};