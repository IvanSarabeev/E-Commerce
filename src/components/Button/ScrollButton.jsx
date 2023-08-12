import React from "react";
import ArrowTop from "../../icons/ArrowTop";

const ScrollButton = ({ scrollToTop, scrollPosition }) => {
  return (
    <>
      <button
        type="button"
        onClick={scrollToTop}
        className={`${
          scrollPosition > 0 ? "fixed" : ""
        } bottom-[5%] right-[2%]`}
      >
        <a
          href="https://"
          className="text-white flex items-center space-x-4 gap-2 bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:ring-blue-300 font-medium rounded-full text-sm  p-2.5 text-center"
        >
          <ArrowTop />
        </a>
      </button>
    </>
  );
};

export default ScrollButton;
