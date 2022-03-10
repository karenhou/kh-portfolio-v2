import React from "react";
import Head from "next/head";
import Hero from "../components/hero";
import About from "../components/about";
import Experience from "../components/experience";
import Work from "../components/work";
import Footer from "../components/footer";
import { sanityClient } from "../sanitfy";

const Home = ({ experiences, projects }) => (
  <div>
    <Head>
      <title>{"Karen Hou's portfolio"}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="title" content="portfolio page" key="title" />
      <meta
        property="description"
        content="Karen Hou's portfolio page that shows her experiences, projects and works she has done"
        key="description"
      />
      <meta name="theme-color" content="#000033"></meta>
    </Head>

    <Hero />
    <About />
    <Experience experiences={experiences} />
    <Work projects={projects} />
    <Footer />
  </div>
);

export async function getStaticProps(context) {
  //use Sanity's home-grown query language GROQ to build anything you can imagine
  const queryExperience = `*[_type=='experience']|order(beginAt desc){
    ...
  }`;
  const experiences = await sanityClient.fetch(queryExperience);

  const queryProjects = `*[_type=='projects']{
    ...
  }`;
  const projects = await sanityClient.fetch(queryProjects);

  return {
    props: {
      experiences,
      projects,
    },
    revalidate: 43200,
  };
}

export default Home;
