import React from "react";
import Photo from "../assets/images/photo2.JPG";
import Image from "next/image";

const KeyWord = (props) => {
  return <span className="text-mb">{props.children}</span>;
};

const About = () => {
  return (
    <section className="bg-db text-white" id="about">
      <div className="container mx-auto min-h-[50rem]">
        <div className="flex flex-col pt-[7rem] w-[26rem] sm:w-[36rem] md:w-[44rem] lg:w-[54rem] xl:w-[65rem] mx-auto">
          <h2 className="md:text-4xl text-3xl text-lb mb-5">{">_ About"}</h2>
          <div className="lg:flex-row flex-col flex">
            <div className=" text-white text-xl md:mr-7 mr-0 sm:leading-9 leading-normal">
              I started out as a RIL/BSP engineer working for big corporations
              writing mostly <KeyWord>C/C++</KeyWord> creating products like
              tablet, develop broad and smart speaker. After 4 years, I decided
              I would like to venture into web development, so I enrolled online
              classes/bootcamps to prepare myself for the new career. Now I've
              worked as a fullstack developer for a startup company for two
              years; during which our internal system has submitted and granted
              patent. Our stacks for all the projects are written in{" "}
              <KeyWord>JavaScript </KeyWord>
              using framework like{" "}
              <KeyWord>ReactJS, Bootstrap, NextJS, and AWS</KeyWord> services (
              <KeyWord>lambda, EC2, DynamoDB, CloudWatch</KeyWord>). I’m also
              learning new tools (
              <KeyWord>Tailwind, Typescript, and Figma</KeyWord>) on the side
              which you can check my GitHub for more details.
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
