import React from "react";

/*
  1. Классовый компонент
*/

export default class ComponentClass extends React.Component {
  render() {
    console.log("-----------");
    console.log("ComponentClass");

    return <p>{this.props.str}</p>;
  }
}
