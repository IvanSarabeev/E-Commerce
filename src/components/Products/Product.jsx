import React, { useEffect, useState } from "react";
import SearchInput from "../Search/SearchInput";
import LoadButton from "../Buttons/LoadButton";
import Cards from "./Cards";
import Loading from "../Loading";

const Product = ({ categoryName, setCategoryName, fetchAllProducts }) => {
  const [loadMore, setLoadMore] = useState(5);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState("");

  console.log(filteredProducts);

  useEffect(() => {
    if (categoryName === "") {
      fetchAllProducts().then((products) => {
        setFilteredProducts(products);
        setIsLoading(false);
      });
    } else {
      fetchProducts();
    }
    setLoadMore(5);
  }, [categoryName]);

  const fetchProducts = async () => {
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
  };

  // const sortProducts = (products, sortOption) => {
  //   setSortBy(sortOption); //updating the state by the chosen case
  //   // fetchProducts(); //after the updated state the PLP rerenders
  //   const sorted = sortProducts(products, sortOption);
  //   setFilteredProducts(sorted);
  //   setIsLoading(false);
  //   switch (sortOption) {
  //     case "lowest":
  //       return products.slice().sort((a, b) => a.price - b.price);
  //     case "highest":
  //       return products.slice().sort((a, b) => b.price - a.price);
  //     case "a-z":
  //       return products.slice().sort((a, b) => a.name.localeCompare(b.name));
  //     case "z-a":
  //       return products.slice().sort((a, b) => b.name.localeCompare(a.name));
  //     default:
  //       return products;
  //   }
  //   //I'm using slice().sort(), because I want to sort the copy array,
  //   //without interacting with the original array
  // };

  // const sortProducts = (products, sortOption) => {
  //   setSortBy(sortOption);
  //   const sortedProducts = getSortedProducts(products, sortOption);
  //   setFilteredProducts(sortedProducts);
  // };

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
    }
  };

  // ...

  const handleSortChange = (e) => {
    const selectedSortOption = e.target.value;
    const sortedProducts = getSortedProducts(
      filteredProducts,
      selectedSortOption
    );
    setFilteredProducts(sortedProducts);
  };

  // const currentlyDisplayed = filteredProducts.slice(0, loadMore);
  const currentlyDisplayed = isLoading
    ? []
    : filteredProducts.slice(0, loadMore);

  const handleLoadingProducts = () => {
    setLoadMore((prevLoad) => prevLoad + 5);
    if (setCategoryName) {
      setCategoryName(categoryName);
    }
  };

  return (
    <section className="w-10/12 grid align-middle justify-center mx-auto mt-10 mb-6">
      <SearchInput />
      <span className="flex items-center justify-center gap-x-4">
        <div>
          <p className="font-semibold font-serif my-4 text-center text-[22px] text-gray-700">
            Currently visible: {currentlyDisplayed.length} from{" "}
            {filteredProducts.length}
          </p>
        </div>
        <div className="sort-selection">
          <form action="#">
            <select name="sort" id="sort" onChange={handleSortChange}>
              <option value="lowest">Price (lowest)</option>
              <option value="highest">Price (highest)</option>
              <option value="a-z">Price (a-z)</option>
              <option value="z-a">Price (z-a)</option>
            </select>
          </form>
        </div>
      </span>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          {filteredProducts.length > 0 ? (
            <div className="gap-4 md:gap-x-14 md:gap-y-8 lg:gap-6 xl:gap-x-4 xl:gap-y-10 grid grid-col-span-1 md:grid-cols-2 lg:grid-cols-3 align-middle justify-center">
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
          {loadMore < filteredProducts.length && (
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
