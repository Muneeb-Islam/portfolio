// components/AnimatedComponent.js

import React, { useEffect } from "react";
// import WOW from "wow.js";

const isServer = typeof window === "undefined";
const WOW = !isServer ? require("wow.js") : null;

export default class MyComponent extends React.Component {
  componentDidMount() {
    new WOW().init();
  }
  render() {
    return <h2 className={"wow fadeInUp"}>I'm animated!</h2>;
  }
}
