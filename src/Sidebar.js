import React from "react";
import { List, ListItem, ListItemText, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  drawerContainer: {
    overflow: "auto",
  },
  toolbar: theme.mixins.toolbar,
}));

const Sidebar = () => {
  const classes = useStyles();

  return (
    <div className={classes.drawerContainer}>
      <div className={classes.toolbar} />
      <List>
        {["Dashboard", "Home", "Settings", "Account"].map((text) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );
};

export default Sidebar;
