import React from "react";
import { SwapiServiceConsumer } from "../swapi-service-context";

const WithSwapiService = (mapMethodsToProps) => (Wrapped) => {

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