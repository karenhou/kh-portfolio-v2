import React from "react";
import Head from "next/head";
import Hero from "../components/hero";
import About from "../components/about";
import Experience from "../components/experience";
import Work from "../components/work";
import Footer from "../components/footer";

const Home = () => (
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
    <Experience />
    <Work />
    <Footer />
  </div>
);

export default Home;
