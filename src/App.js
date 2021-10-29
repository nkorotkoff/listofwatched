import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/header/header";
import AnimeList from "./components/AnimeList/AnimeList";
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";
import { loadUser } from "./store/actions/user";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  });
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Switch>
          <Route exact path={"/"}>
            <AnimeList />
          </Route>
          <Route path={"/signup"}>
            <SignUp />
          </Route>
          <Route path={"/login"}>
            <SignIn />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
