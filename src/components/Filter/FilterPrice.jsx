import React from "react";

const FilterPrice = ({ maxPrice, minPrice, setMinPrice, setMaxPrice }) => {
  return (
    <>
      <h4>Price</h4>
      <div className="mb-4 mt-2">
        <label htmlFor="all">
          <span className="flex gap-x-2">
            <input
              type="radio"
              name="price"
              id="price-all"
              checked={minPrice === "" && maxPrice === ""}
              onChange={() => {
                setMinPrice("");
                setMaxPrice("");
              }}
            />
            <h6>All</h6>
          </span>
        </label>
        <label htmlFor="price-0-50">
          <span className="flex gap-x-2">
            <input
              type="radio"
              name="price"
              id="price"
              checked={minPrice === 0 && maxPrice === 50}
              onChange={() => {
                setMinPrice(0);
                setMaxPrice(50);
              }}
            />
            <h6>$0 - $50</h6>
          </span>
        </label>
        <label htmlFor="price-50-100">
          <span className="flex gap-x-2">
            <input
              type="radio"
              name="price"
              id="price"
              checked={minPrice === 50 && maxPrice === 100}
              onChange={() => {
                setMinPrice(50);
                setMaxPrice(100);
              }}
            />
            <h6>$50 - $100</h6>
          </span>
        </label>
        <label htmlFor="price-100-150">
          <span className="flex gap-x-2">
            <input
              type="radio"
              name="price"
              id="price"
              checked={minPrice === 100 && maxPrice === 150}
              onChange={() => {
                setMinPrice(100);
                setMaxPrice(150);
              }}
            />
            <h6>$100 - $150</h6>
          </span>
        </label>
        <label htmlFor="price-over-150">
          <span className="flex gap-x-2">
            <input
              type="radio"
              name="price"
              id="price"
              checked={minPrice === 150 && maxPrice === 1000}
              onChange={() => {
                setMinPrice(150);
                setMaxPrice(1000);
              }}
            />
            <h6>Over - $150</h6>
          </span>
        </label>
      </div>
    </>
  );
};

export default FilterPrice;
