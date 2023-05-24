import React from "react";
import * as Styles from "./listsContent.styles";
import * as C from "../index";
import { useKeenSlider } from "keen-slider/react";
import { IProjects } from "../../utils/interfaces";

interface ListsContentInterface {
  title: string;
  subtitle: string;
  data: any;
}

export function ListsContent(props: ListsContentInterface) {
  const [ref] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 2,
      spacing: 2,
    },
  });
  return (
    <>
      <Styles.Container>
        <div className="features-gradients">
          <div className="features-gradient fBall"></div>
          <div className="features-gradient sBall"></div>
          <div className="features-gradient tBall"></div>
        </div>
        <Styles.TextContent>
          <C.ButtonComeBack />
          <Styles.Title>{props.title}</Styles.Title>
          <Styles.Subtitle>{props.subtitle}</Styles.Subtitle>
          <br />
          <Styles.ContainerCard ref={ref} className="keen-slider">
            {props?.data?.map((item: IProjects, index: number) => (
              <>
                <C.Card
                  key={index}
                  title={item.title}
                  description={item.description}
                  imgUrl={item.imgUrl}
                  link={item.link}
                />
              </>
            ))}
          </Styles.ContainerCard>
          <Styles.Title>{"--->"}</Styles.Title>
        </Styles.TextContent>
      </Styles.Container>
    </>
  );
}
