import React, { Component } from "react";
import "./Home.scss";
import Backdrop from "../../components/Bars/Backdrop/Backdrop";
import MarqueeBottom from "../../components/Marquee/MarqueeBottom";
import { details2 } from "../../shared/shared";
import Card1 from "../../components/Cards/Card1";
import Card2 from "../../components/Cards/Card2";
import DocumentMeta from "react-document-meta";
import { Animated } from "react-animated-css";

const meta = {
  title: "Capital green doo",
  description:
    "Kompanija Capital green doo posluje u oblasti poljoprivrede i ekskluzivni je uvoznik đubriva Organic mineral.",
  canonical: "https://capitalgreen.rs/",
  meta: {
    charset: "utf-8",
    name: {
      keywords:
        "capital green,capital green srbija,djubrivo,poljoprivreda,bioloska zastita,paprika,pradajz,zelena salata",
    },
  },
};
export default class Home extends Component {
  state = {
    showPopup: false,
  };
  redirectFunc = (page) => {
    return page === "aboutUs"
      ? this.props.history.push("/o-nama")
      : this.props.history.push("/proizvodi");
  };
  removeCommentBox = () => {
    this.setState({
      showPopup: false,
    });
  };

  render() {
    return (
      <DocumentMeta {...meta}>
        <div className="home">
          <Animated
            animationIn="fadeInUp"
            animationOut="fadeOut"
            animationInDuration={800}
            isVisible={true}
          >
            <h1>Capital green doo</h1>
          </Animated>
          <Animated
            animationIn="fadeInUp"
            animationOut="fadeOut"
            animationInDelay={400}
            animationInDuration={1800}
            isVisible={true}
          >
            <Card1
              details={details2}
              clicked={() => {
                this.redirectFunc("aboutUs");
              }}
            />
          </Animated>
          <Card2 details={details2} />
          <MarqueeBottom />
          <Backdrop
            clicked={this.removeCommentBox}
            show={this.state.showPopup}
          />
        </div>
      </DocumentMeta>
    );
  }
}
