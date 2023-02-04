import { validateHeaderValue } from "http";
import * as C from "../components";

export default function Skills() {
  const dataList = [
    { link: "https://www.typescriptlang.org", title: "typescript 🔥⚡️" },
    { link: "https://www.javascript.com", title: "javascript 🔥⚡️" },
    { link: "https://pt-br.reactjs.org", title: "react 🔥" },
    { link: "https://reactnative.dev", title: "react native 🔥" },
    { link: "https://nextjs.org", title: "next.js 🔥" },
    { link: "https://developer.mozilla.org/pt-BR/docs/Web/HTML", title: "HTML 🔥" },
    { link: "https://developer.mozilla.org/pt-BR/docs/Web/css", title: "CSS 🔥" },
    { link: "https://www.freecodecamp.org/news/css-preprocessors/", title: "SASS 🔥" },
    { link: "https://vuejs.org", title: "vue3 🔥" },
    { link: "https://nodejs.org/en/", title: "node ⚡️" },
    { link: "https://expressjs.com/pt-br/", title: "express ⚡️" },
    { link: "https://nestjs.com", title: "nest ⚡️" },
    { link: "https://styled-components.com/docs/api", title: "styled-components | tailwind | mui | bootstrap" },
    { link: "https://laravel.com", title: "laravel ⚡️🐁" },
    { link: "https://www.php.net", title: "php 🐁" },
    { link: "https://www.postgresql.org", title: "postgresql 🐁" },
    { link: "https://www.mongodb.com/", title: "mongoDB 🐁" },
    { link: "https://github.com/bolodissenoura", title: "git 🐁" },
    { link: "https://www.youtube.com/watch?v=IbeD6YarPvg", title: "Bonus : Figma + Photoshop + Kit Adobe + ux/ui proeficience 🐁" },

  ];

  return (
    <>
      <C.ListsContent data={dataList} title="Skills" subtitle="frontend 🔥 | backend ⚡️ | db and tools 🐁 i've already worked" />
    </>
  );
}
