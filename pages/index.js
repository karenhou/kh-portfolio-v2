import React from "react";
import Head from "next/head";
import Hero from "../components/hero";
import About from "../components/about";
import Experience from "../components/experience";

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Hero />
    <About />
    <Experience />
  </div>
);

export default Home;
