import React, { useEffect, useState } from "react";
// import SearchInput from "../Search/SearchInput";
import LoadButton from "../Buttons/LoadButton";
import Cards from "./Cards";

const Product = ({ categoryName, setCategoryName, fetchAllProducts }) => {
  const [loadMore, setLoadMore] = useState(5);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
      setFilteredProducts(data.products);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
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
      <h3 className="font-semibold font-serif my-4 text-center text-[22px] text-gray-700">
        Currently visible: {currentlyDisplayed.length} from{" "}
        {filteredProducts.length}
      </h3>
      {isLoading ? (
        <div className="text-center text-gray-700">Loading...</div>
      ) : (
        <div>
          {filteredProducts.length > 0 ? (
            <div className="gap-4 md:gap-x-14 md:gap-y-8 lg:gap-6 xl:gap-x-4 xl:gap-y-10 grid grid-col-span-1 md:grid-cols-2 lg:grid-cols-3 align-middle justify-center">
              {filteredProducts.slice(0, loadMore).map((items, index) => {
                return <Cards key={index} items={items} />;
              })}
            </div>
          ) : null}
          {loadMore < filteredProducts.length && (
            <div className="mx-auto mt-6 mb-4">
              <LoadButton handleLoadingProducts={handleLoadingProducts} />
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default Product;
