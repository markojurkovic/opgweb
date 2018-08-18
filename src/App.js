import React from "react";
import "./App.css";
import "aos/dist/aos.css";
import Navigation from "./components/Navigation/Navigation";
import Content from "./components/Content";
import Footer from "./components/Footer/Footer";

const App = () => (
  <div>
    <Navigation />
    <Content />
    <Footer />
  </div>
);

export default App;
