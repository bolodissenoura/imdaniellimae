import Link from "next/link";
import React from "react";
import * as Styles from "./linkButton.styles";

export function LinkButton() {
  return (
    <>
      <Styles.Container>
        <Link href="/" passHref legacyBehavior>
          <Styles.Button>
            <a>Skills</a>
          </Styles.Button>
        </Link>
        <Link href="/" passHref legacyBehavior>
          <Styles.Button>
            <a>Work XP</a>
          </Styles.Button>
        </Link>
        <Link href="/projects" passHref legacyBehavior>
          <Styles.Button>
            <a>Projects</a>
          </Styles.Button>
        </Link>
        <Link href="/" passHref legacyBehavior>
          <Styles.Button>
            <a>Contact</a>
          </Styles.Button>
        </Link>
        <Link href="/" passHref legacyBehavior>
          <Styles.Button>
            <a>Am I open to work ?</a>
          </Styles.Button>
        </Link>
      </Styles.Container>
    </>
  );
}
