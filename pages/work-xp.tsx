import * as C from "../components";

export default function WorkXp() {
  const dataList = [
    {
      link: "https://vetrin.com.br",
      title: "Vetrin - Co-founder",
      description:
        "I created and organized a company that provides services directly to over 20 companies in Brazil, with the creation of e-commerce, landing pages, and various info products. During my journey providing services, I worked as a front-end developer for HCL Tech (an Indian-based company with English communication), providing services for AVON here in Brazil.I have also been involved in various freelance projects, using primarily Javascript, Typescript, HTML, CSS, React, Styled-Components (etc.)",
    },
    {
      link: "https://apps.apple.com/br/app/sell-it-agenda-de-corretores/id1583818111",
      title: "Cyrela - Frontend Engineer",
      description:
        "I'm one of the main Front-end developer of my team. Which means I architected 3+ projects with 2000+ daily users, with thousands of requests. As a software developer at Cyrela, I have had the privilege of contributing to the company's legacy of creating the most desirable luxury projects in Brazil. In this role, I have been responsible for developing cross-platform ( IOS & Android ) and web applications that assist home brokers in their work. With over 60 years of history, the Cyrela brand is known for its commitment to excellence, and I have strived to uphold this standard in every project I have worked on. Working closely with the home brokers, I have developed custom applications that help them better serve their clients, streamline their workflows, and ultimately close more deals. Overall, working at Cyrela has been an enriching and fulfilling experience, and I am proud to have contributed to the company's reputation for excellence in the luxury real estate market.",
    },
    {
      link: "https://sobreuol.noticias.uol.com.br/en/",
      title: "UOL - Front-end Developer",
      description:
        "Helped to my team and company to delivery several projects web with responsivity to do a digital transformation of education for the main companies in Brazil, like Santander, Banco do Brasil, Tim, Claro, Americanas, Magalu. UOL EdTech is leading the digital transformation of education in Brazil, building an ecosystem of solutions that connect companies, universities and students. The mission is to expand access to education through technology, thus creating more opportunities and inclusion in the country's economy",
    },
    {
      link: "https://www.boostech.com.br/",
      title: "Boostech - Fullstack ",
      description:
        "One of the key aspects of my work has been transform all the web Frontend to a mobile APK that runs in Zebras Handhelds, and understanding the unique requirements of each company that we work with, and developing custom solutions that are tailored to their needs. This has involved working closely with clients to gather requirements, design user interfaces, and develop features that streamline and optimize their warehouse operations. As a software developer at Boostech, I have had the opportunity to work on developing applications for companies focused on logistics storage and warehouses, also known as Warehouse Management Systems (WMS). In this role, I have been responsible for creating both web and mobile applications, using a range of programming languages and development tools. Throughout my time at Boostech, I have developed a deep understanding of the logistics and warehousing industry, as well as the latest trends and technologies in software development. I have also honed my skills in project management, working collaboratively with cross-functional teams to ensure that projects are delivered on time, within budget, and to the highest quality standards. Overall, my experience at Boostech has been incredibly rewarding, and I look forward to continuing to develop innovative solutions that help our clients succeed in a rapidly evolving marketplace.",
    },
    {
      link: "https://www.boostech.com.br/",
      title: "Fpass - Fullstack",
      description:
        "As a Fullstack Developer, responsible for building and maintaining their streaming platform for EDtech. Fpass is a Lifelong Learning ecosystem with the purpose of transforming education. I used technologies like React, Node.js, and Firebase to create a user-friendly experience for learners and educators. Basically, I made learning online super easy and fun for everyone !",
    },
    {
      link: "https://www.avon.com.br/",
      title: "HCL - Avon",
      description:
        "I worked as a front-end developer for HCL Tech (an Indian-based company with English communication), providing services for AVON here in Brazil.",
    },
  ];

  return (
    <>
      <C.ListsContent
        data={dataList}
        title="Work xp"
        subtitle="~~~ places that have a little bit of me ❤️"
      />
    </>
  );
}
