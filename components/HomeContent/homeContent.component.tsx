import React from "react";
import * as Styles from "./homeContent.styles";
import * as Component from "../index";

export function HomeContent() {
  return (
    <>
      <Styles.Container>
        <div className="features-gradients">
          <div className="features-gradient fBall"></div>
          <div className="features-gradient sBall"></div>
          <div className="features-gradient tBall"></div>
        </div>
        <Styles.TextContent>
          <Styles.Title>Daniel limae</Styles.Title>
          <Styles.Subtitle>software developer | front-end | web and mobile | 🦕</Styles.Subtitle>
          <Component.LinkButton />
        </Styles.TextContent>
      </Styles.Container>
    </>
  );
}
