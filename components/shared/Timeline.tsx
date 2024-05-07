"use client";

import { Chrono } from "react-chrono";
const Timeline = ({ experiences }: any) => {
  console.log(experiences);
  return (
    <section className="">
      <Chrono
        theme={{
          primary: "orange",
          secondary: "inherit",
          titleColor: "black",
        }}
        classNames={{
          card: "",
          cardSubTitle: "h2-bold",
          cardText: "",
          cardTitle: "h1-bold ",
          controls: "my-controls",
          title: "h1-bold text-dark100_light900",
        }}
        items={[
          {
            title: "2016-2018",
            cardTitle: "Secondary School Certificate",
            url: "http://google.com",
            cardSubtitle: "Akij Collegiate School",
            cardDetailedText: `Achieved exceptional results in academic coursework and examinations.",
          "Demonstrated proficiency in various subjects, including mathematics, science, and languages.",
          "Engaged in community service projects, contributing positively to society`,
          },
          {
            title: "2018-2020",
            cardTitle: "Higher Secondary School Certificate",
            cardSubtitle: `Cantonment College Jashore`,
            cardDetailedText: `Achieved outstanding results in academic studies and examinations.",
          "Participated actively in extracurricular activities, honing leadership and teamwork skills.",
          "Demonstrated proficiency in a variety of subjects, including science, mathematics, and humanities.",
          "Engaged in community service initiatives, contributing positively to the local community.`,
          },
          {
            title: "2021-current",
            cardTitle: "Statistics",
            cardSubtitle: `Khulna BL College`,
            cardDetailedText: `Studying advanced statistical methods and theories to analyze and interpret data effectively.",
          "Collaborating with peers and faculty members on academic projects and assignments.",
          "Applying statistical techniques to real-world scenarios and problem-solving exercises.`,
          },
        ]}
        mode="VERTICAL_ALTERNATING"
      />
    </section>
  );
};

export default Timeline;
