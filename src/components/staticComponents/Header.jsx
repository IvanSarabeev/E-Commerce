import React, { useState, useEffect } from "react";

const Header = ({ setCategoryName, fetchAllProducts }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchProductCategory();
  }, []);

  const fetchProductCategory = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/products?category`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const data = await response.json();

      const categoryMap = new Map(); //new Map(object)
      data.products.forEach((product) => {
        const { category } = product; //each individual category
        if (!categoryMap.has(category)) {
          categoryMap.set(category, product); //check if the product doesn't contain the category
        }
      });

      const uniqueCategories = Array.from(categoryMap.values()); //Each individual category throught the Array.from()
      setCategories(uniqueCategories);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCategoryClick = async (event) => {
    const categoryName = event.target.textContent; //retrieves the text content of the clicked button. aka..Skincare
    //other way to explain is that, when it's clicked it extracts the text content, the name can be further used
    //to fetch data related to the category from the API.
    const response = await fetch(
      `https://dummyjson.com/products/category/${categoryName}`
    );

    if (!response.ok) {
      console.error(
        "Error fetching products by category:",
        response.statusText
      );
      return;
    }

    setCategories((prevState) => [...prevState, categoryName]); //I'm using the prevState, so that I can control(manage)
    //the rendering of the elements.. It's basiclly from preventing of losing the data

    if (setCategoryName) {
      setCategoryName(categoryName);
    }
  };

  return (
    <header className="sticky z-20 top-0 hidden sm:flex justify-evenly items-center py-2 bg-gray-800">
      <div>
        <img
          src="../images/logo.png"
          alt="logo"
          className="w-auto h-[60px] object-cover"
        />
      </div>
      <div className="hidden w-full md:flex items-center justify-center md:w-auto">
        <button
          type="button"
          onClick={() => {
            fetchAllProducts();
            setCategoryName("");
          }}
          className="text-gray-300 capitalize px-2 hover:text-blue-500 hover:scale-105"
        >
          All
        </button>
        {categories.map((cat, index) => {
          return (
            <div key={index} className="flex items-center justify-center">
              <button
                type="button"
                onClick={handleCategoryClick}
                className="text-gray-300 capitalize px-2 hover:text-blue-500 hover:scale-105"
              >
                {cat.category}
              </button>
            </div>
          );
        })}
      </div>
    </header>
  );
};

export default Header;
