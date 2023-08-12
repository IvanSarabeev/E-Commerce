import React, { useState, useCallback, useEffect } from 'react';
import Header from './components/Static/Header';
import Main from './components/Product/Main';
import Footer from './components/Static/Footer';
import ScrollButton from './components/Button/ScrollButton'

function App() {
  const [categoryName, setCategoryName] = useState("");
  const [scrollPosition, setScrollPostion] = useState(0);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [ratingFilter, setRatingFilter] = useState(false);
  const [filtered, setFiltered] = useState([]);

  const fetchAllProducts = useCallback(async () => {
    try {
      const response = await fetch(`https://dummyjson.com/products?limit=100`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const data = await response.json();
      return data.products;

    } catch (error) {
      console.error(error);
    }
  }, [])

  useEffect(() => {
    fetchAllProducts()

    const handleScroll = () => {
      const currentPosition = window.pageYOffset || document.documentElement.scrollTop;
      setScrollPostion(currentPosition);
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [fetchAllProducts])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

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
      setFiltered(data.products);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='min-h-screen w-auto relative'>
      <Header setCategoryName={setCategoryName} fetchAllProducts={fetchAllProducts} />
      <Main categoryName={categoryName}
        setCategoryName={setCategoryName}
        fetchAllProducts={fetchAllProducts}
        setFiltered={setFiltered}
        minPrice={minPrice}
        maxPrice={maxPrice}
        ratingFilter={ratingFilter}
        applyFilters={applyFilters} />
      <ScrollButton scrollToTop={scrollToTop} scrollPosition={scrollPosition} />
      <Footer />
    </div>
  );
}

export default App;
