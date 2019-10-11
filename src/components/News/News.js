import React, { Component } from "react";
import "./News.scss";
export default class News extends Component {
  render() {
    let classes = this.props.small ? "newsDiv small" : "newsDiv";
    return (
      <div className={classes}>
        <p>
          <span>News1</span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem odio
          ea voluptatibus aspernatur dolore fugit!
        </p>
      </div>
    );
  }
}
