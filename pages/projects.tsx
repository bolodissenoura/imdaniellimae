import * as C from "../components";
import { dataList } from "../components/ListsContent/projects.fakeData";

export default function Projects() {
  return (
    <>
      <C.ListsContent
        data={dataList}
        title="Projects"
        subtitle="~~~ personal | freelance | study | charity | not all here ( absolutely )"
      />
    </>
  );
}
