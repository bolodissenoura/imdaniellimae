import Link from "next/link";
import React from "react";
import * as Styles from "./linkButton.styles";
import { useKeenSlider } from "keen-slider/react";

interface Props {
  setFunction: () => void;
}

export function LinkButton(props: Props) {
  const [ref] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 4,
      spacing: 2,
    },
  });
  return (
    <>
      <Styles.Container ref={ref} className="keen-slider">
        <Link href="/skills" passHref legacyBehavior>
          <Styles.Button className="keen-slider__slide">
            <a>Skills</a>
          </Styles.Button>
        </Link>
        <Link href="cvDaniellimae.pdf" download passHref legacyBehavior>
          <Styles.Button className="keen-slider__slide">
            <a>Work XP | CV</a>
          </Styles.Button>
        </Link>
        <Link href="/projects" passHref legacyBehavior>
          <Styles.Button className="keen-slider__slide">
            <a>Projects</a>
          </Styles.Button>
        </Link>
        <Link
          href="https://www.linkedin.com/in/daniel-limae-b53090200/"
          passHref
          legacyBehavior>
          <Styles.Button className="keen-slider__slide">
            <a>Contact</a>
          </Styles.Button>
        </Link>
        <Styles.Button
          className="keen-slider__slide"
          onClick={() => props.setFunction()}>
          <a>Am I open to work ?</a>
        </Styles.Button>
      </Styles.Container>
    </>
  );
}
