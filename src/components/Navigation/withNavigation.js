import React from "react";
import Navigation from "./Navigation";

const withNavigation = WrappedComponent =>
  class extends React.Component {
    render() {
      return (
        <div>
          <Navigation />
          <WrappedComponent {...this.props} />
        </div>
      );
    }
  };

export default withNavigation;
