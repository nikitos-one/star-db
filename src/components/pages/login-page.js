import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";

const LoginPage = ({isLoggedIn, onLogin}) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/secret");
    }
  });

  if(!isLoggedIn) {
    return (
      <div className="jumbotron text-center">
        <p>Login to see secret page!</p>
        <button
          className="btn btn-primary"
          onClick={onLogin}>
          Login
        </button>
      </div>
    )
  }
}

export default LoginPage;