import React from "react";
import PropTypes from "prop-types";

import ErrorButton from "../error-button";
import ErrorBoundry from "../error-boundry";

import "./row.css";

const Row = ({left, right}) => {
  return (
    <ErrorBoundry>
      <div className='row'>
        <div className='col-6'>
          {left}
        </div>
        <div className='col-6'>
          {right}
          <ErrorButton/>
        </div>
      </div>
    </ErrorBoundry>
  )
}

Row.prototype = {
  left: PropTypes.node,
  right: PropTypes.node
}

export default Row;