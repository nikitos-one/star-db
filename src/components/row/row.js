import React from "react";

import ErrorButton from "../error-button";

import "./row.css";

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

export default Row;