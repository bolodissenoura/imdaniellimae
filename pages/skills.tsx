import * as C from "../components";

export default function Skills() {
  const dataList = [
    { link: "https://vetrin.com.br", title: "Vetrin" },
    {
      link: "https://draleilawessler.com.br",
      title: "DRA. LEILA WESSLER - Ginecologista e Obstetra",
    },
    { link: "https://libertmusic.com.br", title: "Libert Music" },
    {
      link: "https://bolodissenoura.github.io/pc-jiu/",
      title: " Team PC Jiu-Jitsu 👊🏼",
    },
    {
      link: "https://react-estudo-lom.vercel.app",
      title: "React Class Consume Api",
    },
    {
      link: "https://facil-consulta-front.vercel.app",
      title: "Form Facil-consulta in VueJS",
    },
    {
      link: "https://react-estudo-lom.vercel.app",
      title: "React Class Consume Api",
    },
    {
      link: "https://bolodissenoura.github.io/DateDestino/",
      title: "Date Destino ❤️",
    },
    { link: "https://bolodissenoura.github.io/Nutrem/", title: "Nutremp" },
    {
      link: "https://rifa-na-veia-deploy2-ehgjamhew-bolodissenoura.vercel.app",
      title: "Next project ( ?? )",
    },
    { link: "https://bolodissenoura.github.io/Coegi/", title: "Coegi LP" },
    {
      link: "https://aaarp.org.br",
      title: "AMIGOS DOS ANIMAIS DE RIBEIRÃO PRETO",
    },
    {
      link: "https://bolodissenoura.github.io/daniellimae/",
      title: "Old Portifolio",
    },
  ];

  return (
    <>
      <C.ListsContent data={dataList} title="Skills" subtitle="----- " />
    </>
  );
}
