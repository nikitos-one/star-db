import React, { Component } from "react";

import './people-page.css'
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import ErrorButton from "../error-button";
import ErrorBoundry from "../error-boundry";

import SwapiService from "../../services/swapi-service";

const Row = ({ left, right }) => {
  return (
    <div className='people-page row'>
      <div className='col-6'>
        { left }
      </div>
      <div className='col-6'>
        { right }
        <ErrorButton />
      </div>
    </div>
  )
}

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
      <PersonDetails personId={ selectedPerson }/>
    )

    return (
      <ErrorBoundry>
        <Row left={ itemList } right={ personDetails } />
      </ErrorBoundry>
    )
  }
}