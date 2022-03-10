import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

const DisclosureComponent = ({ experiences }) => {
  return (
    <>
      {experiences.map((exp, i) => {
        return (
          <Disclosure key={i}>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-white bg-mb rounded-lg focus:outline-none focus-visible:ring mb-2">
                  <span>
                    {exp.company} - {exp.jobTitle}
                  </span>
                  <div className="flex">
                    <span className="mr-2">
                      {new Date(exp.beginAt).getFullYear()}-
                      {new Date(exp.endAt).getFullYear()}
                    </span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-white`}
                    />
                  </div>
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-2 pb-2 text-sm text-db">
                  <ul>
                    {exp.details.map((detail) => {
                      return <li key={detail._key}>- {detail.content}</li>;
                    })}
                  </ul>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        );
      })}
    </>
  );
};

const Experience = ({ experiences }) => {
  return (
    <section className="bg-db text-white" id="exp">
      <div className="container mx-auto min-h-[45rem]">
        <div className="flex flex-col pt-[9rem] md:max-w-[44rem] sm:max-w-[36rem] max-w-[20rem] mx-auto">
          <h2 className="md:text-4xl text-3xl text-mb mb-6">
            {">_ Experience"}
          </h2>
          <div className="w-full px-0 pt-2">
            <div className="w-full xl:max-w-2xl sm:max-w-full max-w-xs p-2 sm:mx-auto mx-0 bg-white rounded-2xl exp-container">
              <DisclosureComponent experiences={experiences} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
