import React from "react";
import IconSearch from "../../icons/IconSearch";

const SearchInput = (
  {
    // handleKeyDown,
    // onChange,
    // onCategoryChange,
    // handleSearchClick,
  }
) => {
  const handleCategoryChange = (category) => {
    // setCategories(category);
  };

  const handleKeyDown = (e) => {
    console.log("Key is pressed:", e.key);
    if (e.keyCode === "Enter") {
      // setSearch("");
    }
  };
  const handleSearchClick = () => {
    // searchProduct();
  };

  return (
    <div className="w-8/12 flex mx-auto mb-4 -mt-4 items-center justify-between bg-gray-600 py-3 px-6 rounded-lg">
      {/* <input
        type="search"
        name="search"
        placeholder="Search (keyword, etc)"
        className="w-full text-white bg-gray-600 py-3 px-4 rounded-lg"
        onChange={onChange}
        onKeyUp={handleKeyDown}
      /> */}
      <input
        type="text"
        name="category"
        placeholder="Search category"
        className="w-full text-white bg-gray-600 py-3 px-4 rounded-lg"
        // onChange={onCategoryChange}
      />
      <button type="button" onClick={handleSearchClick}>
        <IconSearch />
      </button>
    </div>
  );
};

export default SearchInput;
