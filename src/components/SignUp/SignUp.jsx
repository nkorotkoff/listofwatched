import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { makeStyles, Typography, TextField, Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import {signUp} from '../../store/actions/user'

const schema = yup.object().shape({
  login: yup
    .string()
    .required("Поле обязательно к заполнению")
    .min(3, "Логин слишком короткий"),
  email: yup
    .string()
    .required("Поле обязательно к заполнению")
    .email("Неправильный эмаил"),
  password: yup
    .string()
    .required("Поле обязательно к заполнению")
    .min(3, "Пароль слишком короткий"),
  cpassword: yup
    .string()
    .required("Поле обязательно к заполнению")
    .min(3, "Пароль слишком короткий")
    .oneOf([yup.ref("password"), null], "Пароли должны совпадать"),
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

const SignUp = () => {
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
    dispatch(signUp({email:data.email,name:data.login,password:data.password}))
  };

  return (
    <div className={classes.center}>
      <form className={classes.mainForm} onSubmit={handleSubmit(submitClick)}>
        <div>
          <TextField
            style={{ width: 350 }}
            label={"Имя"}
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
            label={"Email"}
            {...register("email")}
          />
          {errors.email && (
            <Typography className={classes.redText}>
              {errors.email.message}
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
        <div>
          <TextField
            style={{ width: 350 }}
            type={"password"}
            label={"Повторите Пароль"}
            {...register("сpassword")}
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
          Зарегистрироваться
        </Button>
      </form>
    </div>
  );
};

export default SignUp;
