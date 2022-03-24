import React from "react";
import Photo from "../assets/images/photo2.JPG";
import Image from "next/image";
import Link from "next/link";

const KeyWord = (props) => {
  return <span className="text-lb">{props.children}</span>;
};

const About = () => {
  return (
    <section className="bg-db text-white" id="about">
      <div className="container mx-auto min-h-[50rem]">
        <div className="flex flex-col pt-[7rem] max-w-[26rem] sm:max-w-[36rem] md:max-w-[44rem] lg:max-w-[54rem] xl:max-w-[65rem] mx-auto">
          <h2 className="md:text-4xl text-3xl text-mb mb-5">{">_ About"}</h2>
          <div className="lg:flex-row flex-col flex">
            <div className=" text-white text-xl md:mr-7 mr-0 sm:leading-9 leading-normal">
              {" I've "} worked as a fullstack developer for a startup company
              for two years; during which our internal system has submitted and
              granted patent. The stacks I often use are the followings:{" "}
              <KeyWord>JavaScript </KeyWord>with framework like{" "}
              <KeyWord>ReactJS/Redux, Bootstrap, NextJS, and AWS</KeyWord>{" "}
              services (<KeyWord>Lambda, EC2, DynamoDB, CloudWatch, S3</KeyWord>
              ). {"I’m also "}learning new tools (
              <KeyWord>Tailwind, Typescript, and Figma</KeyWord>) on the side
              which you can check my{" "}
              <KeyWord>
                <Link href="https://github.com/karenhou">
                  <a className="hover:underline" target="_blank">
                    GitHub
                  </a>
                </Link>{" "}
              </KeyWord>
              for more details. Back when I just starting my career I worked as
              a RIL/BSP engineer for big corporations writing mostly{" "}
              <KeyWord>C/C++</KeyWord> creating products like tablet, develop
              broad and smart speaker. After 4 years, I decided I would like to
              venture into web development, so I enrolled online
              classes/bootcamps to prepare myself for the new career.
            </div>
            <div className="flex-auto mt-5 lg:mt-0 mb-5 ">
              <div className="photo-container">
                <Image src={Photo} alt="Photo" layout="responsive" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
