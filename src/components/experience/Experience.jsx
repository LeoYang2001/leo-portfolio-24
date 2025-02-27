import React from "react";
import "../about/about.css";
import Timeline from "./Timeline";

const Experience = ({ openModal, closeModal, ShowModal }) => {
  const experienceList = [
    {
      title: "University of Kentucky",
      subTitle: "Computer Science",
      period: {
        startTime: {
          year: 2022,
          month: 8,
        },
      },
    },
    {
      title: "Kentucky Energy And Envionment Cabinet",
      subTitle: "Software intern",
      period: {
        startTime: {
          year: 2023,
          month: 5,
        },
        endTime: {
          year: 2024,
          month: 12,
        },
      },
      des: `During my three-term internship with the Energy & Environment Cabinet, I gained experience in Leaflet for interactive mapping and ASP.NET
MVC development. I also developed Python scripts for web scraping, automating data formatting in Excel, and syncing local files to Box daily,
enhancing data accessibility and automation skills`,
    },
    {
      title: "University of Kentucky",
      subTitle: "Ios developer",
      period: {
        startTime: {
          year: 2024,
          month: 1,
        },
        endTime: {
          year: 2024,
          month: 5,
        },
      },
      des: `I collaborate with a professor on an iOS sports prediction app for UK students, using Swift for the frontend and AWS for the backend. While
Toptal professionals lead development, I contribute to technology implementation and app maintenance.`,
    },
    {
      title: "University of Kentucky Computational Science",
      subTitle: "ACCESS Research Assistant",
      period: {
        startTime: {
          year: 2024,
          month: 8,
        },
        endTime: {
          year: 2025,
          month: 1,
        },
      },
      des: `Researched AI APIs from open-source platforms like Hugging Face, evaluating functionalities, integration strategies, and practical applications.
Investigated Retrieval-Augmented Generation (RAG) models to enhance AI-driven information retrieval and documented findings in structured
reports to support AI model selection and deployment.`,
    },
    {
      title: "University of Kentucky Biological Science",
      subTitle: "React Native Developer",
      period: {
        startTime: {
          year: 2024,
          month: 9,
        },
      },
      des: `Developing a full-stack mobile app for the Biological Science Center to manage salamander inventory, research orders, and daily maintenance
tasks like feeding and cleaning axolotls. The app streamlines order tracking, automates inventory updates, and enhances workflow efficiency by
integrating a database for seamless record-keeping and regulatory compliance.`,
    },
  ];

  return (
    <section className="about section" id="experience">
      <h2 className="section__title">Experience</h2>
      <span className="section__subtitle">My journey</span>
      <main>
        <div className="flex justify-center gap-4">
          <span
            style={{ color: "var(--title-color)" }}
            className=" font-bold text-2xl"
          >
            Education & Work
          </span>
        </div>
        <section>
          <Timeline
            ShowModal={ShowModal}
            openModal={openModal}
            closeModal={closeModal}
            experienceList={experienceList}
          />
        </section>
      </main>
    </section>
  );
};

export default Experience;
