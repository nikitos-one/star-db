import ItemList from "../item-list";
import {
  withData,
  withSwapiService,
  withChildFunction,
  compose
} from "../hoc-helpers";

const renderPerson= ({ name, gender, birthYear }) => `${name} (${gender}, ${birthYear})`;
const renderPlanet = ({ name }) => `${name}`;
const renderStarship = ({ model, name }) => `${name} (${model})`;

const mapPersonMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPeople
  }
}

const PersonList = compose(
                     withSwapiService(mapPersonMethodsToProps),
                     withData,
                     withChildFunction(renderPerson)
                   )(ItemList);

const mapPlanetMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPlanets
  }
}

const PlanetList = compose(
                     withSwapiService(mapPlanetMethodsToProps),
                     withData,
                     withChildFunction(renderPlanet)
                   )(ItemList);

const mapStarshipMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllStarships
  }
}

const StarshipList = compose(
                       withSwapiService(mapStarshipMethodsToProps),
                       withData,
                       withChildFunction(renderStarship)
                     )(ItemList);

export {
  PersonList,
  PlanetList,
  StarshipList
};