import {Component} from "react";
import React from "react";

class Title extends Component {
  render() {
    const {title, subtitle} = this.props;
    return (
      <>
        <h1>{title}</h1>
        {subtitle && <h3>{subtitle}</h3>}
      </>
    )
  }
}

export default Title;
