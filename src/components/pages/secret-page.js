import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";

const SecretPage = ({isLoggedIn}) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  });

  if(isLoggedIn) {
    return (
      <div className="jumbotron text-center">
        <h3>This page is full of secret!!!</h3>
      </div>
    )
  }
}

export default SecretPage;