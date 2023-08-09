import React, { useState } from 'react';
import Header from './components/staticComponents/Header';
import Main from './components/Products/Main';
import Footer from './components/staticComponents/Footer';

function App() {
  const [categoryName, setCategoryName] = useState("");

  const fetchAllProducts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      return data.products;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='min-h-screen w-auto'>
      <Header setCategoryName={setCategoryName} fetchAllProducts={fetchAllProducts} />
      <Main categoryName={categoryName} setCategoryName={setCategoryName} fetchAllProducts={fetchAllProducts} />
      <Footer />
    </div>
  );
}

export default App;
