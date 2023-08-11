import React, { useState } from "react";
import Product from "./Product";
import Filter from "../Filtering/Filter";

const Main = ({ categoryName, setCategoryName, fetchAllProducts }) => {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleFiltering = async () => {
    try {
      const response = await fetch(
        `https://dummyjson.com/products/search?q=category&min_price=${minPrice}&max_price=${maxPrice}`
      );

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex">
      <Filter
        setMaxPrice={setMaxPrice}
        setMinPrice={setMinPrice}
        handleFiltering={handleFiltering}
      />
      <Product
        categoryName={categoryName}
        setCategoryName={setCategoryName}
        fetchAllProducts={fetchAllProducts}
      />
    </div>
  );
};

export default Main;
