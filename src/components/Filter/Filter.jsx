import React, { useState } from "react";
import FilterPrice from "./FilterPrice";
import FilterRating from "./FilterRating";

const Filter = ({ applyFilters }) => {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [ratingFilter, setRatingFilter] = useState(false);

  return (
    <div className="w-[180px] hidden  h-full fixed z-10 sm:w-[200px] md:w-[215px] xl:flex flex-col items-center bg-[#f8fafc] border-r border-gray-300">
      <div className="flex flex-col pt-10">
        <FilterRating
          ratingFilter={ratingFilter}
          setRatingFilter={setRatingFilter}
        />
        <FilterPrice
          maxPrice={maxPrice}
          minPrice={minPrice}
          setMinPrice={setMinPrice}
          setMaxPrice={setMaxPrice}
        />
        <button onClick={() => applyFilters(minPrice, maxPrice, ratingFilter)}>
          Apply Filter
        </button>
      </div>
    </div>
  );
};

export default Filter;
