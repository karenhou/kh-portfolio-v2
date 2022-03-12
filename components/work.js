import React from "react";
import { urlFor } from "../sanitfy";

const TagComponent = ({ stacks }) => {
  return stacks.map((s) => {
    if (s.type === "front") {
      return (
        <div
          key={s.toolName}
          className="rounded-lg bg-mb text-white px-1 py-1 text-sm whitespace-nowrap mr-2 mt-2">
          {s.toolName}
        </div>
      );
    } else if (s.type === "back") {
      return (
        <div
          key={s.toolName}
          className="rounded-lg bg-or text-white px-2 py-1 text-sm whitespace-nowrap mr-2 mt-2">
          {s.toolName}
        </div>
      );
    } else {
      return (
        <div
          key={s.toolName}
          className="rounded-lg bg-gr text-white px-2 py-1 text-sm whitespace-nowrap mr-2 mt-2">
          {s.toolName}
        </div>
      );
    }
  });
};

const ProjectsComponent = ({ projects }) => {
  return (
    <>
      {projects.map((project, i) => {
        return (
          <div
            key={i}
            className="flex md:flex-row flex-col lg:px-4 px-0 border-b-2 border-white-300 py-5 ">
            <div className="sm:mr-7">
              <img
                src={urlFor(project.image).fit("max").url()}
                alt=""
                className="rounded-lg md:max-w-[19rem]"
              />
            </div>
            <div className="flex flex-col xs:mt-4">
              <div className="font-bold text-xl text-lb">
                <a href={project.url} target="_blank" rel="noreferrer">
                  {project.projectTitle}
                </a>
              </div>
              <div className="mb-3 opacity-50 md:min-h-0 sm:min-h-[6rem] min-h-[3rem] mt-2">
                {project.description}
              </div>
              <div className="mb-3 flex flex-wrap">
                <TagComponent stacks={project.stacks} />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

const Work = ({ projects }) => {
  return (
    <section className="bg-db text-white" id="works">
      <div className="container mx-auto min-h-[50rem]">
        <div className="flex flex-col pt-[7rem] max-w-[26rem] sm:max-w-[36rem] md:max-w-[44rem] lg:max-w-[54rem] xl:max-w-[65rem] mx-auto pb-[7rem]">
          <div className="lg:flex py-4">
            <div className="lg:w-1/3 mb-2 md:mb-0">
              <h2 className="md:text-4xl text-3xl text-mb mb-5">
                {">_ Works"}
              </h2>
              <div>
                These are some of the works {"I've"} done through out the
                years(self or for the companyes {"I've"} worked for)
              </div>
            </div>

            <div className="lg:w-2/3 flex flex-col lg:px-4 px-0 project-box">
              <ProjectsComponent projects={projects} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
