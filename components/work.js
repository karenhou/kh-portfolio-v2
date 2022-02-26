import React from "react";

const stackInfo = [
  {
    name: "Lifi+ smart home page",
    url: "https://www.lifi.plus",
    roles:
      "Worked with UI/UX designer and market team to recreate a new face for the company",
    stack: [
      { type: "front", name: "ReactJS" },
      { type: "front", name: "Redux" },
      { type: "back", name: "Google ReCAPTCHA" },
      { type: "front", name: "Bootstrap 4" },
      { type: "back", name: "i18" },
      { type: "back", name: "NodeJS" },
      { type: "cloud", name: "AWS Lambda" },
      { type: "back", name: "NextJS" },
      { type: "cloud", name: "AWS S3" },
    ],
  },
  {
    name: "EIP",
    roles:
      "Worked with UI/UX designer and stakeholder to design a new internal project management system",
    url: "https://eip.lifi.plus/",
    stack: [
      { type: "front", name: "ReactJS" },
      { type: "front", name: "Redux" },
      { type: "front", name: "Bootstrap 4" },
      { type: "cloud", name: "AWS Lambda" },
      { type: "cloud", name: "Google FCM" },
      { type: "cloud", name: "AWS S3" },
      { type: "back", name: "NodeJS" },
      { type: "back", name: "JWT" },
      { type: "cloud", name: "AWS EC2" },
    ],
  },
  {
    name: "Trello",
    roles:
      "It's a side project I did a long time ago, which allow users to share their travel itinerary with others",
    url: "https://limitless-brook-80249.herokuapp.com/",
    stack: [
      { type: "front", name: "ReactJS" },
      { type: "front", name: "Redux" },
      { type: "front", name: "Material UI" },
      { type: "cloud", name: "ExpressJS" },
      { type: "back", name: "MongoDB" },
      { type: "back", name: "NodeJS" },
      { type: "back", name: "JWT" },
    ],
  },
];

const TagComponent = ({ data, index }) => {
  return data[index].stack.map((s) => {
    if (s.type === "front") {
      return (
        <div className="rounded-lg bg-mb text-white px-1 py-1 text-sm whitespace-nowrap mr-2 mt-2">
          {s.name}
        </div>
      );
    } else if (s.type === "back") {
      return (
        <div className="rounded-lg bg-peach text-white px-2 py-1 text-sm whitespace-nowrap mr-2 mt-2">
          {s.name}
        </div>
      );
    } else {
      return (
        <div className="rounded-lg bg-gr text-white px-2 py-1 text-sm whitespace-nowrap mr-2 mt-2">
          {s.name}
        </div>
      );
    }
  });
};

const Work = () => {
  return (
    <section className="bg-db text-white" id="works">
      <div className="container mx-auto min-h-[50rem]">
        <div className="flex flex-col pt-[7rem] w-[26rem] sm:w-[36rem] md:w-[44rem] lg:w-[54rem] xl:w-[65rem] mx-auto">
          <div className="lg:flex py-4">
            <div className="lg:w-1/3 mb-2 md:mb-0">
              <h2 className="md:text-4xl text-3xl text-lb mb-5">
                {">_ Works"}
              </h2>
              <div>
                These are some of the works I've done through out the year(self
                or for the companyes I've worked for)
              </div>
            </div>

            <div className="lg:w-2/3 flex flex-col lg:px-4 px-0">
              <div className="flex flex-col lg:px-4 px-0 border-b-2 border-white-300 py-5">
                <div className="font-bold text-xl text-or ">
                  <a href={stackInfo[0].url} target="_blank">
                    {stackInfo[0].name}
                  </a>
                </div>
                <div className="mb-3 opacity-50 md:min-h-0 min-h-[6rem] mt-2">
                  {stackInfo[0].roles}
                </div>
                <div className="mb-3 flex flex-wrap">
                  <TagComponent data={stackInfo} index={0} />
                </div>
              </div>

              <div className="flex flex-col lg:px-4 px-0 border-b-2 border-white-300 py-5">
                <div className="font-bold text-xl text-or">
                  <a href={stackInfo[1].url} target="_blank">
                    {stackInfo[1].name}
                  </a>
                </div>
                <div className="mb-3 opacity-50 md:min-h-0 min-h-[6rem] mt-2">
                  {stackInfo[1].roles}
                </div>
                <div className="mb-3 flex flex-wrap">
                  <TagComponent data={stackInfo} index={1} />
                </div>
              </div>

              <div className="flex flex-col lg:px-4 px-0 border-white-300 py-5">
                <div className="font-bold text-xl text-or">
                  <a href={stackInfo[2].url} target="_blank">
                    {stackInfo[2].name}
                  </a>
                </div>
                <div className="mb-3 opacity-50 md:min-h-0 min-h-[6rem] mt-2">
                  {stackInfo[2].roles}
                </div>
                <div className="mb-3 flex flex-wrap">
                  <TagComponent data={stackInfo} index={2} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
