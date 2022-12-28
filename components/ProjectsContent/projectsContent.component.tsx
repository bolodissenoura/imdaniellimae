import React from "react";
import * as Styles from "./projectsContent.styles";
import * as Component from "../index";

export function ProjectsContent() {
  return (
    <>
      <Styles.Container>
        <div className="features-gradients">
          <div className="features-gradient fBall"></div>
          <div className="features-gradient sBall"></div>
          <div className="features-gradient tBall"></div>
        </div>
        <Styles.TextContent>
          <Component.ButtonComeBack />
          <Styles.Title>Projects</Styles.Title>
          <Styles.Subtitle>{">"} 2022</Styles.Subtitle>
        </Styles.TextContent>
      </Styles.Container>
    </>
  );
}
