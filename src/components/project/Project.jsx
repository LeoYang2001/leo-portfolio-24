import React from "react";
import "./project.css";

const projectList = [
  {
    proImgUrl:
      "https://firebasestorage.googleapis.com/v0/b/myportfolio-5f48d.firebasestorage.app/o/LexSeeAppLogo.png?alt=media&token=2314ee18-ff17-4cdf-bb85-f3a3b6db76a2",
    proName: "LexSee (Available on App Store)",
    proDes: `LexSee is a multilingual language-learning app that enhances vocabulary retention through AI-driven conversations, image-based learning, and
translation-free definitions.`,
    proGithub: "https://github.com/LeoYang2001/LexSee",
    size: 12,
  },
];

const Project = () => {
  return (
    <section className="project section mt-40" id="project">
      <h2 className="section__title">Project</h2>
      <span className="section__subtitle">
        Each project is a unique piece of development
      </span>
      <main className="w-full  flex flex-col items-center">
        {projectList.map((pro, index) => (
          <div
            style={{ width: "50%" }}
            className={`projectItem flex justify-center flex-wrap gap-10 mb-40`}
          >
            <div
              style={{ width: "30%", minWidth: 300 }}
              className={`flex-1  flex videoContainer  justify-center projectImg ${
                index % 2 == 0 ? "" : "order-1"
              }`}
            >
              {pro.proVideoUrl ? (
                <video
                  style={{ width: "50%", minWidth: 130 }}
                  controls
                  loop
                  src={pro.proVideoUrl}
                  className=" object-contain"
                >
                  <source src={pro.proVideoUrl} type="video/quicktime" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img className=" object-cover" src={pro.proImgUrl} alt="" />
              )}
            </div>
            <div
              style={{ width: "40%", minWidth: 300 }}
              className="  flex  items-center flex-col px-10 gap-4 justify-between"
            >
              <span className=" text-black font-bold text-xl ">
                {pro.proName}
              </span>
              <span className=" text-center ">{pro.proDes}</span>
              <div className="flex w-full gap-4 justify-center mt-4 items-center px-1 text-black">
                {pro.proGithub && (
                  <a href={pro.proGithub} target="_blank">
                    <span className=" flex  justify-center items-center gap-1 hoverItem">
                      Code
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-github"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                      </svg>
                    </span>
                  </a>
                )}
                {pro.proLiveDemo && (
                  <a href={pro.proLiveDemo} target="_blank">
                    <span className=" flex  justify-center items-center gap-1 hoverItem">
                      Live Demo
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-box-arrow-up-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"
                        />
                        <path
                          fill-rule="evenodd"
                          d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"
                        />
                      </svg>
                    </span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </main>
    </section>
  );
};

export default Project;
