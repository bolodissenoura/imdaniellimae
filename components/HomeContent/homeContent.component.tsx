import Image from "next/image";
import React from "react";
import * as Styles from "./homeContent.styles";

export function HomeContent() {
  return (
    <>
      <Styles.Container>
        <Styles.TextContent>
          <Styles.Title>Daniel limae</Styles.Title>
          <Styles.Subtitle>
            Software Developer | Front-end Developer
          </Styles.Subtitle>
        </Styles.TextContent>
      </Styles.Container>
    </>
  );
}
