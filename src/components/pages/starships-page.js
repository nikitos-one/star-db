import React from "react";
import { useNavigate } from 'react-router-dom';

import {StarshipList} from "../sw-components";

const StarshipsPage = () => {
  const navigate  = useNavigate();

  return (
    <StarshipList
      onItemSelected={(itemId) => {
        navigate(itemId);
      }
    } />
  );
};

export default StarshipsPage;