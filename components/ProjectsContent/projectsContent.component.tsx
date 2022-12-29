import React from "react";
import * as Styles from "./projectsContent.styles";
import * as Component from "../index";

export function ProjectsContent() {
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
          <Styles.Title>Projects</Styles.Title>
          <Styles.Subtitle>{"~~~"} personal | freelance | study | charity | not all here ( absolutely ) </Styles.Subtitle>
          <Styles.Link>
            <a href="https://vetrin.com.br" target="_blank" rel="noreferrer">
              {">"} Vetrin
            </a>
          </Styles.Link>
          <Styles.Link>
            <a
              href="https://draleilawessler.com.br"
              target="_blank"
              rel="noreferrer"
            >
              {">"} DRA. LEILA WESSLER - Ginecologista e Obstetra
            </a>
          </Styles.Link>
          <Styles.Link>
            <a href="libertmusic.com.br" target="_blank" rel="noreferrer">
              {">"} Libert Music
            </a>
          </Styles.Link>
          <Styles.Link>
            <a
              href="https://bolodissenoura.github.io/pc-jiu/"
              target="_blank"
              rel="noreferrer"
            >
              {">"} Team PC Jiu-Jitsu 👊🏼
            </a>
          </Styles.Link>
          <Styles.Link>
            <a
              href="https://react-estudo-lom.vercel.app"
              target="_blank"
              rel="noreferrer"
            >
              {">"} React Class Consume Api
            </a>
          </Styles.Link>
          <Styles.Link>
            <a
              href="https://facil-consulta-front.vercel.app"
              target="_blank"
              rel="noreferrer"
            >
              {">"} Form Facil-consulta in VueJS
            </a>
          </Styles.Link>
          <Styles.Link>
            <a
              href="https://react-estudo-lom.vercel.app"
              target="_blank"
              rel="noreferrer"
            >
              {">"} React Class Consume Api
            </a>
          </Styles.Link>
          <Styles.Link>
            <a
              href="https://bolodissenoura.github.io/DateDestino/"
              target="_blank"
              rel="noreferrer"
            >
              {">"} Date Destino ❤️
            </a>
          </Styles.Link>
          <Styles.Link>
            <a
              href="https://bolodissenoura.github.io/Nutrem/"
              target="_blank"
              rel="noreferrer"
            >
              {">"} Nutremp 
            </a>
          </Styles.Link>
          <Styles.Link>
            <a
              href="https://rifa-na-veia-deploy2-ehgjamhew-bolodissenoura.vercel.app"
              target="_blank"
              rel="noreferrer"
            >
              {">"} Next project ( ?? ) 
            </a>
          </Styles.Link>
          <Styles.Link>
            <a
              href="https://bolodissenoura.github.io/Coegi/"
              target="_blank"
              rel="noreferrer"
            >
              {">"} Coegi LP
            </a>
          </Styles.Link>
          <Styles.Link>
            <a
              href="https://aaarp.org.br"
              target="_blank"
              rel="noreferrer"
            >
              {">"} AMIGOS DOS ANIMAIS DE RIBEIRÃO PRETO
            </a>
          </Styles.Link>
          <Styles.Link>
            <a
              href="https://bolodissenoura.github.io/daniellimae/"
              target="_blank"
              rel="noreferrer"
            >
              {">"} Old Portifolio
            </a>
          </Styles.Link>
        </Styles.TextContent>
      </Styles.Container>
    </>
  );
}
