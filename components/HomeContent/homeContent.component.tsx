import React, { useState } from "react";
import * as Styles from "./homeContent.styles";
import * as Component from "../index";

export function HomeContent() {
  const [title, setTitle] = useState('Daniel limae')
  return (
    <>
      <Styles.Container>
        <div className="features-gradients">
          <div className="features-gradient fBall"></div>
          <div className="features-gradient sBall"></div>
          <div className="features-gradient tBall"></div>
        </div>
        <Styles.TextContent>
          <Styles.Title>{title}</Styles.Title>
          <Styles.Subtitle>software developer | front-end | web and mobile | 🦕</Styles.Subtitle>
          <Component.LinkButton setFunction={() => setTitle('Only part time')} />
        </Styles.TextContent>
      </Styles.Container>
    </>
  );
}
