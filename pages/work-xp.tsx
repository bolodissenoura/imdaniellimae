import * as C from "../components";

export default function WorkXp() {
  const dataList = [
    { link: "https://vetrin.com.br", title: "Vetrin" },
    {
      link: "https://draleilawessler.com.br",
      title: "DRA. LEILA WESSLER - Ginecologista e Obstetra",
    },

  ];

  return (
    <>
      <C.ListsContent
        data={dataList}
        title="Work xp"
        subtitle="~~~ places and projects that have a little bit of me ❤️"
      />
    </>
  );
}
