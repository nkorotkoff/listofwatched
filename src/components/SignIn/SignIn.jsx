import React, { useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Redirect } from "react-router-dom";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { Button, makeStyles, TextField, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "./../../store/actions/user";
import { useCookies } from "react-cookie";

const schema = yup.object().shape({
  login: yup.string().required("Поле обязательно к заполнению"),
  password: yup.string().required("Поле обязательно к заполнению"),
});

const useStyles = makeStyles((theme) => ({
  redText: {
    color: "red",
  },
  center: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "200px",
  },
  submitButton: {
    display: "flex",
    margin: "0 auto",
    marginTop: "30px",
  },
  mainForm: {},
}));

const SignIn = () => {
  const token = useSelector((store) => store.users.user);
  // const [cookies, setCookie] = useCookies(["token"]);
  // useEffect(() => {
  //   if (token != undefined) setCookie("token", token, { path: "/" });
  // });

  const dispatch = useDispatch();
  const classes = useStyles();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitClick = (data) => {
    dispatch(signIn({ email: data.login, password: data.password }));
  };

  return (
    <div className={classes.center}>
      {token && <Redirect to="/" />}
      <form className={classes.mainForm} onSubmit={handleSubmit(submitClick)}>
        <div>
          <TextField
            style={{ width: 350 }}
            label={"Логин"}
            {...register("login")}
          />
          {errors.login && (
            <Typography className={classes.redText}>
              {errors.login.message}
            </Typography>
          )}
        </div>
        <div>
          <TextField
            style={{ width: 350 }}
            type={"password"}
            label={"Пароль"}
            {...register("password")}
          />
          {errors.password && (
            <Typography className={classes.redText}>
              {errors.password.message}
            </Typography>
          )}
        </div>
        <Button
          className={classes.submitButton}
          variant={"outlined"}
          type={"submit"}
        >
          Войти
        </Button>
      </form>
    </div>
  );
};

export default SignIn;
