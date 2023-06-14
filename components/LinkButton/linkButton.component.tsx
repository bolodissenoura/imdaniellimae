import Link from "next/link";
import React from "react";
import * as Styles from "./linkButton.styles";
import { useKeenSlider } from "keen-slider/react";

interface Props {
  setFunction: () => void;
}

export function LinkButton(props: Props) {
  return (
    <>
      <Styles.Container>
        <Link href="/skills" passHref legacyBehavior>
          <Styles.Button>
            <a>Skills</a>
          </Styles.Button>
        </Link>
        <Styles.Button>
          <a href="daniellimae.pdf" download>
            Download CV
          </a>
        </Styles.Button>
        <Link href="/work-xp" passHref legacyBehavior>
          <Styles.Button>
            <a>Work XP</a>
          </Styles.Button>
        </Link>
        <Link href="/projects" passHref legacyBehavior>
          <Styles.Button>
            <a>Projects</a>
          </Styles.Button>
        </Link>
        <Link
          href="https://www.linkedin.com/in/daniel-limae-b53090200/"
          passHref
          legacyBehavior>
          <Styles.Button>
            <a>Contact</a>
          </Styles.Button>
        </Link>
        <Styles.Button onClick={() => props.setFunction()}>
          <a>Am I open to work ?</a>
        </Styles.Button>
      </Styles.Container>
    </>
  );
}
