import React, { Component } from "react";

import './people-page.css'
import ItemList from "../item-list";
import ItemDetails from "../item-details";
import Row from "../row";
import ErrorBoundry from "../error-boundry";

import SwapiService from "../../services/swapi-service";

export default class PeplePage extends Component {

  swapiService = new SwapiService();

  state = {
    selectedPerson: 1,
  }

  onPersonSelected = (id) => {
    this.setState( {
      selectedPerson: id
    })
  }

  render () {

    const { selectedPerson } = this.state;

    const itemList = (
      <ItemList
        onItemSelected={ this.onPersonSelected }
        getData={ this.swapiService.getAllPeople }
        renderItems={ ({ name, gender, birthYear }) => `${name} (${gender}, ${birthYear})` }
      />
    );

    const personDetails = (
      <ItemDetails itemId={ selectedPerson }/>
    )

    return (
      <ErrorBoundry>
        <Row left={ itemList } right={ personDetails } />
      </ErrorBoundry>
    )
  }
}