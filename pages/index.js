import React from "react";
import Head from "next/head";
import Nav from "../components/nav";

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <h3 className="text-red-300 font-bold underline">Hello</h3>
  </div>
);

export default Home;
