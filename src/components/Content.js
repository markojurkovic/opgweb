import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home/Home";
import Herbs from "./Herbs/Herbs";
import HerbInfo from "./HerbInfo/HerbInfo";

const Content = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/products" component={Herbs} />
        <Route path="/herbinfo/:herbName" component={HerbInfo} />
      </Switch>
    </div>
  );
};

export default Content;
