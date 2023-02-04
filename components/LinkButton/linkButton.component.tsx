import Link from "next/link";
import React from "react";
import * as Styles from "./linkButton.styles";

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
        <Link href="cvDaniellimae.pdf" download passHref legacyBehavior>
          <Styles.Button>
            <a>Work XP | CV</a>
          </Styles.Button>
        </Link>
        <Link href="/projects" passHref legacyBehavior>
          <Styles.Button>
            <a>Projects</a>
          </Styles.Button>
        </Link>
        <Link href="https://www.linkedin.com/in/daniel-lima-b53090200/" passHref legacyBehavior>
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
