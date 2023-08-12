import React, { useState } from "react";
import Product from "./Product";
import Filter from "../Filter/Filter";

const Main = ({ categoryName, setCategoryName, fetchAllProducts }) => {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [ratingFilter, setRatingFilter] = useState(false);
  const [filtered, setFiltered] = useState([]);

  const applyFilters = async (minPrice, maxPrice, ratingFilter) => {
    try {
      const response = await fetch(
        `https://dummyjson.com/products?limit=100&minPrice=${minPrice}&maxPrice=${maxPrice}&ratingFilter=${ratingFilter}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const data = await response.json();
      setFiltered(data.products); //updating the filtered products
    } catch (error) {
      console.error(error);
    }
  };

  const handleFiltering = async () => {
    applyFilters(minPrice, maxPrice, ratingFilter);
  };

  return (
    <div className="flex">
      <Filter
        applyFilters={applyFilters}
        setMinPrice={setMinPrice}
        setMaxPrice={setMaxPrice}
        setRatingFilter={setRatingFilter}
        handleFiltering={handleFiltering}
      />
      <Product
        categoryName={categoryName}
        setCategoryName={setCategoryName}
        fetchAllProducts={fetchAllProducts}
        setFiltered={setFiltered}
        minPrice={minPrice}
        maxPrice={maxPrice}
        ratingFilter={ratingFilter}
        applyFilters={applyFilters}
      />
    </div>
  );
};

export default Main;
