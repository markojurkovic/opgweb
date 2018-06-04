import React from "react";
import "./App.css";
import Home from "./components/Home/Home";
import withNavigation from "./components/Navigation/withNavigation";

const App = () => {
  const HomeWithNavigation = withNavigation(Home);
  return <HomeWithNavigation />;
};

export default App;
