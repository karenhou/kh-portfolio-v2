import React from "react";

const Hero = () => {
  return (
    <section className="bg-db text-white">
      <div className="container mx-auto h-[50rem]">
        <div className="flex flex-col h-full justify-center md:max-w-[44rem] sm:max-w-[36rem] max-w-[26rem] mx-auto">
          <p className="md:text-4xl text-3xl text-lb mb-5">{"Hello. I'm"}</p>
          <h1 className="text-6xl mb-5">Karen Hou</h1>

          <h2 className="md:text-4xl text-3xl text-mb mb-5">
            I’m curious about lots of things, and passionate about web
            development
          </h2>

          <p className="opacity-50 md:text-2xl text-xl">
            Currently, fullstack developer based in Taipei, Taiwan
          </p>
          <p className="opacity-50 md:text-2xl text-xl">
            I develope clean and high quality websites and help small business
            to create online presense
          </p>
          <button className="mt-5 rounded-md border-[0.1rem] border-lb w-24 px-3 py-2">
            <a href="mailto:ymcl760728@gmail.com">Say Hi</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
