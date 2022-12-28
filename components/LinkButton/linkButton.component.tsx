import Link from "next/link";
import React from "react";
import * as Styles from "./linkButton.styles";

export function LinkButton() {
  return (
    <>
      <Styles.Container>
        <Styles.Button>
          <Link href="/">Skills</Link>
        </Styles.Button>
        <Styles.Button>
          <Link href="/">Work XP</Link>
        </Styles.Button>
        <Styles.Button>
          <Link href="/projects">Projects</Link>
        </Styles.Button>
        <Styles.Button>
          <Link href="/">Contact</Link>
        </Styles.Button>
        <Styles.Button>
          <Link href="/">Am I open to work ?</Link>
        </Styles.Button>
      </Styles.Container>
    </>
  );
}
