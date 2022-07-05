import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import Copyright from "../../components/pure/Copyright";

const DashBoard = () => {
  const history = useHistory();

  const logout = () => {
    history.push("/login");
  };
  return (
    <div>
      <Button variant="contained" onClick={() => logout()}>
        Logout
      </Button>
      <Copyright />
    </div>
  );
};

export default DashBoard;
