import React, { useState } from "react";
import FilterPrice from "./FilterPrice";
import FilterRating from "./FilterRating";

const Filter = ({ applyFilters }) => {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [ratingFilter, setRatingFilter] = useState(false);

  return (
    <div className="w-[180px] sm:w-[200px] md:w-[235px] py-16 flex flex-col items-center bg-[#f8fafc] border-r border-gray-300 relative min-h-screen z-0">
      <div className="flex flex-col">
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
