import React from "react";
import * as Styles from "./buttonComeBack.styles";
import * as Component from "../index";
import Link from "next/link";

export function ButtonComeBack() {
  return (
    <>
      <Link href="/" passHref legacyBehavior>
        <Styles.Button>
          <a>Come Back</a>
        </Styles.Button>
      </Link>
    </>
  );
}
