import React, { useState, useEffect } from "react";
import BarIcon from "../../icons/BarIcon";
import XMarkIcon from "../../icons/XmarkIcon";

const Header = ({ setCategoryName, fetchAllProducts }) => {
  const [categories, setCategories] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

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
      console.error("Error fetching category:", response.statusText);
      return;
    }

    setCategories((prevState) => [...prevState, categoryName]); //I'm using the prevState, so that I can control(manage)
    //the rendering of the elements.. It's basiclly from preventing of losing the data

    if (setCategoryName) {
      setCategoryName(categoryName);
    }
  };

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex justify-center">
      <nav className="fixed md:static w-full md:flex justify-between items-center px-5 md:px-8 bg-slate-50 py-2.5 z-10 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <img
            src="../images/logo.png"
            alt="logo"
            className="w-auto h-[35px] md:h-[45px] lg:h-[60px] object-cover"
          />
          <button
            type="button"
            onClick={handleMenuToggle}
            className="md:hidden bg-gray-200 text-slate-600 p-1.5 rounded transition"
          >
            {isOpen ? (
              <XMarkIcon className="w-5 h-5" />
            ) : (
              <BarIcon className="w-5 h-5" />
            )}
          </button>
        </div>
        <div className="hidden md:flex items-center gap-4 xl:gap-6 text-[15px] font-semibold">
          <button
            type="button"
            onClick={() => {
              fetchAllProducts();
              setCategoryName("");
            }}
            className="text-gray-800 py-2 md:py-0 pl-1.5 lg:pl-2.5 md:hover:opacity-70 capitalize transition rounded whitespace-nowrap hover:text-blue-500 hover:scale-105"
          >
            All
          </button>
          {categories.map((cat, index) => {
            return (
              <div key={index} className="flex items-center justify-center">
                <button
                  type="button"
                  onClick={handleCategoryClick}
                  className="text-gray-800 py-2 md:py-0 pl-1.5 lg:pl-2.5 md:hover:opacity-70 capitalize transition rounded whitespace-nowrap hover:text-blue-500 hover:scale-105"
                >
                  {cat.category}
                </button>
              </div>
            );
          })}
        </div>
        {isOpen && (
          <div className="md:hidden fixed z-50 w-full py-1.5 bg-gray-100 rounded-md mt-2 shadow-md border border-gray-200">
            <button
              type="button"
              onClick={() => {
                fetchAllProducts();
                setCategoryName("");
              }}
              className="flex items-start justify-start bg-gray-200 bg-opacity-50 md:bg-transparent md:text-blue-500 py-2 md:py-0 pl-1.5 lg:pl-2.5 font-semibold md:hover:opacity-70 transition rounded whitespace-nowrap"
            >
              All
            </button>
            {categories.map((cat, index) => {
              return (
                <div
                  key={index}
                  className="flex items-start justify-start bg-gray-200 bg-opacity-50 md:bg-transparent md:text-blue-500 py-2 md:py-0 pl-1.5 lg:pl-2.5 font-semibold md:hover:opacity-70 transition rounded whitespace-nowrap"
                >
                  <button
                    type="button"
                    onClick={handleCategoryClick}
                    className="text-gray-800 py-2 md:py-0 pl-1.5 lg:pl-2.5 text-[15px] font-semibold md:hover:opacity-70 transition rounded whitespace-nowrap capitalize hover:text-blue-500 hover:scale-105"
                  >
                    {cat.category}
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
