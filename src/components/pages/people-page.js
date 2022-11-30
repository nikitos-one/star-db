import React from "react";
import { useNavigate, useParams } from 'react-router-dom';

import Row from "../row";
import {
  PersonList,
  PersonDetails
} from "../sw-components";

const PeoplePage = () => {
  const navigate  = useNavigate();
  const {itemId} = useParams();

  return (
    <Row
      left={
        <PersonList
          onItemSelected={(itemId) => {
            navigate(`/people/${itemId}`);
          }}
        />
      }
      right={<PersonDetails itemId={itemId} />}
    />
  );
};

export default PeoplePage;