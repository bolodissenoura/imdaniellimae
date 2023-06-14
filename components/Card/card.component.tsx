import Link from "next/link";
import Image from "next/image";
import React from "react";
import * as Styles from "./linkButton.styles";

interface Props {
  imgUrl: string;
  link: string;
  title: string;
  description: string;
}

export function Card(props: Props) {
  return (
    <>
      <Styles.Container>
        <Styles.Header>
          <Styles.LittleCuteBall color="#EF4444" />
          <Styles.LittleCuteBall color="#EAB308" />
          <Styles.LittleCuteBall color="#18A34A" />
        </Styles.Header>
        <Styles.Title>{props.title}</Styles.Title>
        <br />
        <Styles.Body>
          <Styles.SubTitle>{props.description}</Styles.SubTitle>
        </Styles.Body>
      </Styles.Container>
    </>
  );
}
