import React from "react";

const Sort = ({ handleSortChange }) => {
  return (
    <div className="flex flex-col items-start">
      <label htmlFor="sort" className="text-[14px]">
        Sort
      </label>
      <form action="#">
        <select
          name="sort"
          id="sort"
          onChange={handleSortChange}
          className="text-[14px] font-serif font-semibold bg-transparent bottom-8 cursor-pointer border-b border-gray-800"
        >
          <option value="lowest">Descending</option>
          <option value="highest">Ascending</option>
          <option value="a-z">Name (a-z)</option>
          <option value="z-a">Name (z-a)</option>
        </select>
      </form>
    </div>
  );
};

export default Sort;
