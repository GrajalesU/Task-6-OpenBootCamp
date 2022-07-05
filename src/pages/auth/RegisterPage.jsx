import React from "react";
import { Container, Button } from "@mui/material";
import { useHistory } from "react-router-dom";

const Registerpage = () => {
  const history = useHistory();
  const navigate = (path) => {
    history.push(path);
  };
  return (
    <Container>
      Register Now
      <Button onClick={() => navigate("/login")}>Login</Button>
    </Container>
  );
};

export default Registerpage;
