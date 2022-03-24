import React, { useState, useEffect } from "react";

const ScrollTopButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
		in place of 'smooth' */
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={
        `hover:border-2 rounded-full w-16 h-16 hover:cursor-pointer bg-transparent items-center fixed right-1 bottom-0 ` +
        (visible ? "visible" : "hidden")
      }>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 flex w-full"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 7l4-4m0 0l4 4m-4-4v18"
        />
      </svg>
    </button>
  );
};

export default ScrollTopButton;
