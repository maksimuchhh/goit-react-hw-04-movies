import React, { lazy, Suspense } from "react";
import Header from "./components/Header";
import { Route, Switch } from "react-router-dom";
import Loader from "react-loader-spinner";

function App() {
  const HomePage = lazy(() => import("././views/HomePage"));
  const Movies = lazy(() => import("./views/Movies"));
  const MovieDetails = lazy(() => import("./views/MovieDetails"));

  return (
    <>
      <Header />
      <Suspense
        fallback={
          <Loader type="ThreeDots" color="#00BFFF" height={40} width={40} />
        }
      >
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/movies" component={Movies} />
          <Route path="/movies/:id" component={MovieDetails} />
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
