import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import AccountBoxIcon from "@material-ui/icons/AccountBox";

const MainMenu = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const toggleDrawer = () => {
    setShowDrawer(!showDrawer);
  };

  const MenuItem = ({ name, path, icon }) => {
    const navigate = useNavigate();

    return (
      <ListItem
        button
        key={name}
        onClick={() => {
          navigate(path);
          setShowDrawer(false);
        }}
      >
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={name} />
      </ListItem>
    );
  };

  return (
    <>
      <IconButton onClick={toggleDrawer} edge="start">
        <MenuIcon />
      </IconButton>
      <Drawer
        open={showDrawer}
        onClose={() => {
          setShowDrawer(false);
        }}
        anchor="top"
      >
        <List>{menuItems.map(MenuItem)}</List>
      </Drawer>
    </>
  );
};

export default MainMenu;

const createData = (name, path, icon) => {
  return {
    name,
    path,
    icon,
  };
};

const menuItems = [
  createData("Home", "/", <HomeIcon />),
  createData("About Me", "/about", <AccountBoxIcon />),
];
