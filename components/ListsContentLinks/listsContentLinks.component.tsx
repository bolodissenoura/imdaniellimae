import React from "react";
import * as Styles from "./listsContent.styles";
import * as Component from "../index";

interface ListsContentInterface {
  title: string;
  subtitle: string;
  data: Array<{ link: string; title: string }>;
}

export function ListsContentLink(props: ListsContentInterface) {
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
          <Styles.Title>{props.title}</Styles.Title>
          <Styles.Subtitle>{props.subtitle}</Styles.Subtitle>
          {props.data.map((item) => (
            <>
              <Styles.Link>
                <a href={item.link} target="_blank" rel="noreferrer">
                  {">"} {item.title}
                </a>
              </Styles.Link>
            </>
          ))}
        </Styles.TextContent>
      </Styles.Container>
    </>
  );
}
