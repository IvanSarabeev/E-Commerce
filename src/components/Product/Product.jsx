import React, { useCallback, useEffect, useState } from "react";
import LoadButton from "../Button/LoadButton";
import Cards from "./Card";
import Loading from "../Loading";
import Sort from "../Sort/Sort";

const Product = ({
  categoryName,
  setCategoryName,
  fetchAllProducts,
  minPrice,
  maxPrice,
  ratingFilter,
  applyFilters,
  setFiltered,
}) => {
  const [loadMore, setLoadMore] = useState(20);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    if (categoryName === "") {
      fetchAllProducts().then((products) => {
        setFilteredProducts(products);
        setIsLoading(false);
      });
    } else {
      fetchProducts();
    }
    setLoadMore(20);
  }, [categoryName, fetchAllProducts]);

  const fetchProducts = useCallback(async () => {
    try {
      const response = await fetch(
        `https://dummyjson.com/products/category/${categoryName}`
      );

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const data = await response.json();
      const sortedProducts = getSortedProducts(data.products, sortBy);
      setFilteredProducts(sortedProducts);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  }, [categoryName, sortBy]);

  const getSortedProducts = (products, sortOption) => {
    switch (sortOption) {
      case "lowest":
        return products.slice().sort((a, b) => a.price - b.price);
      case "highest":
        return products.slice().sort((a, b) => b.price - a.price);
      case "a-z":
        return products.slice().sort((a, b) => {
          if (!a.name) return -1;
          return a.name.localeCompare(b.name);
        });
      case "z-a":
        return products.slice().sort((a, b) => {
          if (!b.name) return -1;
          return b.name.localeCompare(a.name || undefined);
        });
      default:
        return products;
      //I'm using slice().sort(), because I want to sort the copy array,
      //   //without interacting with the original array
    }
  };

  const handleSortChange = (e) => {
    const selectedSortOption = e.target.value;
    const sortedProducts = getSortedProducts(
      filteredProducts,
      selectedSortOption
    );
    setFilteredProducts(sortedProducts);
  };

  const currentlyDisplayed = isLoading
    ? []
    : filteredProducts.slice(0, loadMore);

  const handleLoadingProducts = () => {
    setLoadMore((prevLoad) => prevLoad + 20);
    if (setCategoryName) {
      setCategoryName(categoryName);
    }
  };

  return (
    <section className="w-full grid items-center justify-center mx-auto pt-16 md:pt-8 pb-2 bg-[#edf2f7]">
      <span className="flex flex-wrap gap-y-4 md:flex-row mb-6 items-center justify-center text-center gap-x-6 text-gray-800">
        <p className="font-semibold font-serif text-[18px]">
          Visible: {currentlyDisplayed.length} from {filteredProducts.length}
        </p>
        <Sort handleSortChange={handleSortChange} />
      </span>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          {filteredProducts.length > 0 ? (
            <div className="-z-10 gap-4 md:gap-x-14 md:gap-y-8 lg:gap-6 xl:gap-x-8 xl:gap-y-10 grid grid-col-span-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pb-4 align-middle justify-center mx-auto">
              {filteredProducts.slice(0, loadMore).map((items, index) => {
                const productRating =
                  filteredProducts.find((product) => product.id === items.id)
                    ?.rating || 0;
                return (
                  <Cards
                    key={index}
                    items={items}
                    productRating={productRating}
                  />
                );
              })}
            </div>
          ) : null}
          {loadMore < filteredProducts.length &&
            loadMore !== filteredProducts.length && (
              <div className="flex justify-center mt-6 mb-4">
                <LoadButton handleLoadingProducts={handleLoadingProducts} />
              </div>
            )}
        </div>
      )}
    </section>
  );
};

export default Product;
