import React from "react";
import GitHubIcon from "../assets/images/Github - Negative.svg";
import EmailIcon from "../assets/images/Google - Negative.svg";
import LinkedinIcon from "../assets/images/LinkedIn - Negative.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="h-16 flex bg-db text-white items-center px-10 lg:px-16">
      <div className="max-w-7xl w-full mx-auto flex">
        <div className="xxs:hidden xs:flex">
          © {new Date().getFullYear()} , Karen Hou, Built with{" "}
          <a
            href="https://nextjs.org/"
            target="_blank"
            rel="noreferrer"
            className="hover:underline hover:text-lb">
            NextJS
          </a>
        </div>
        <div className="flex flex-auto align-middle justify-end">
          <div className="w-100 flex">
            <a
              className="h-5 w-5 mr-4"
              href="https://github.com/karenhou"
              target="_blank"
              rel="noreferrer">
              <Image src={GitHubIcon} alt="GitHubIcon" layout="responsive" />
            </a>
            <a className="h-5 w-5 mr-4" href="mailto:ymcl760728@gmail.com">
              <Image src={EmailIcon} alt="EmailIcon" layout="responsive" />
            </a>
            <a
              className="h-5 w-5"
              href="https://www.linkedin.com/in/khou/"
              target="_blank"
              rel="noreferrer">
              <Image
                src={LinkedinIcon}
                alt="LinkedinIcon"
                layout="responsive"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
