import React, { Component } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import withNavigation from "./components/Navigation/withNavigation";
import AOS from "aos";
import "aos/dist/aos.css";

class App extends Component {
  componentDidMount = () => {
    AOS.init({
      duration: 2000
    });
  };
  render() {
    const HomeWithNavigation = withNavigation(Home);
    return <HomeWithNavigation />;
  }
}

export default App;
