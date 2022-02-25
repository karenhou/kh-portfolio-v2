import React from "react";
import Head from "next/head";
import Hero from "../components/hero";
import About from "../components/about";

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Hero />
    <About />
  </div>
);

export default Home;
