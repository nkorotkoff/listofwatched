import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Button,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import Profile from "./profile/profile";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    marginLeft: "30px",
    color: "black",
  },
  appBar: {
    backgroundColor: "#fcf8f7",
    marginBottom: "35px",
  },
  button: {
    color: "black",
  },
  link: {
    textDecoration: "none",
    color: "black",
  },
  mainLinks: {
    width: "80%",
    display: "flex",
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static" color={"primary"}>
        <Toolbar>
          <div className={classes.mainLinks}>
            <Typography align={"left"} variant="h6" className={classes.title}>
              <Link className={classes.link} to={"/"}>
                Главная
              </Link>
            </Typography>
            <Typography align={"left"} variant="h6" className={classes.title}>
              Список аниме
            </Typography>
            <Typography align={"left"} variant="h6" className={classes.title}>
              Список фильмов
            </Typography>
          </div>
          <Profile />
          <Button className={classes.button} color="inherit">
            <Link className={classes.link} to={"/login"}>
              Войти
            </Link>
          </Button>
          <Button className={classes.button} color="inherit">
            <Link className={classes.link} to={"/signup"}>
              Зарегистрироваться
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
