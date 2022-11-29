import React from "react";
import {useParams} from "react-router-dom";

import ItemDetails, {Record} from "../item-details";
import { withSwapiService } from "../hoc-helpers";

const StarshipDetails = (props) => {
  const {itemId} = useParams();

  return (
    <ItemDetails {...props} itemId={itemId}>
      <Record field="model" label="Model" />
      <Record field="length" label="Length" />
      <Record field="costInCredits" label="Cost" />
    </ItemDetails>
  );
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getStarship,
    getImageUrl: swapiService.getStarshipImage
  }
};

export default withSwapiService(mapMethodsToProps)(StarshipDetails);