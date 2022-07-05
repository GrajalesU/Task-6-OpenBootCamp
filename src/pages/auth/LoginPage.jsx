import React from "react";
import { useHistory } from "react-router-dom";
import Loginformik from "../../components/pure/forms/loginFormik";
import Button from "@mui/material/Button";

const Loginpage = ({ login }) => {
  const history = useHistory();
  const navigate = (path) => {
    history.push(path);
  };
  return (
    <div>
      <h1>Login Page</h1>
      <Loginformik login={login}></Loginformik>
      <Button onClick={() => navigate("/register")}>Register now</Button>
    </div>
  );
};

export default Loginpage;
