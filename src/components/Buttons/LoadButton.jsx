import React from "react";

const LoadButton = ({ handleLoadingProducts }) => {
  return (
    <>
      <button
        type="button"
        onClick={handleLoadingProducts}
        className="text-white w-fit bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
      >
        Load More..
      </button>
    </>
  );
};

export default LoadButton;
