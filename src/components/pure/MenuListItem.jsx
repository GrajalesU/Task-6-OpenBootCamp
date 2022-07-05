import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Home, Settings, Task } from "@mui/icons-material";
import { useHistory } from "react-router-dom";

const getIcon = (icon) => {
  if (icon === "HOME") return <Home />;
  if (icon === "TASK") return <Task />;
  if (icon === "SETTINGS") return <Settings />;
  return <Home />;
};

const MenuListItem = ({ list }) => {
  const history = useHistory();
  const navigate = (path) => {
    history.push(path);
  };
  return (
    <List>
      {list.map(({ text, path, icon }, index) => {
        <ListItem key={index} button onClick={() => navigate(path)}>
          <ListItemIcon>{getIcon(icon)}</ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>;
      })}
    </List>
  );
};

export default MenuListItem;
