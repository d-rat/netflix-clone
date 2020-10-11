import React from "react";
import { Switch,Route } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import MoviePage from "./components/moviePage/MoviePage";

function App() {
  return (
    <div style={{width:"100%" , height:"100%"}}>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/movie/:id" exact component={MoviePage} />
      </Switch>
    </div>
  );
}

export default App;
