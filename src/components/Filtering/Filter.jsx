import React, { useState } from "react";
import FilterIcon from "../../icons/FilterIcon";
import FilterBtn from "../Buttons/FilterBtn";

const Filter = ({ setMinPrice, setMaxPrice, handleFiltering }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="w-2/12 flex flex-col bg-gray-700">
      <button type="button" onClick={() => setIsActive(!isActive)}>
        <span className="inline-flex items-center">
          Filter <FilterIcon />
        </span>
      </button>
      <div className={`${isActive ? "flex" : "hidden"}  flex-col`}>
        <span>
          <label htmlFor="checkbox">Avaible</label>
          <input type="checkbox" name="" placeholder="brand" />
        </span>
        <label htmlFor="">Price:</label>
        <span>
          <input
            type="number"
            name="мinPrice"
            placeholder="Min Price:"
            onChange={(e) => setMinPrice(e.target.value)}
            className="indent-2"
          />
          <input
            type="number"
            name="maxPrice"
            placeholder="Max Price:"
            onChange={(e) => setMaxPrice(e.target.value)}
            className="indent-2"
          />
        </span>
        <FilterBtn
          onClick={() => {
            handleFiltering();
          }}
        />
      </div>
    </div>
  );
};

export default Filter;
