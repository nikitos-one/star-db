import React from "react";
import { SwapiServiceConsumer } from "../swapi-service-context";
import {type} from "@testing-library/user-event/dist/type";

const WithSwapiService = (Wrapped, mapMethodsToProps) => {

  return (props) => {
    return (
      <SwapiServiceConsumer>
        {
          (swapiServise) => {

            const serviceProps = mapMethodsToProps(swapiServise);

            return (
              <Wrapped {...props} { ...serviceProps} />
            )
          }
        }
      </SwapiServiceConsumer>
    );
  };
};

export default WithSwapiService;