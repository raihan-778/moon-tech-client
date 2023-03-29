import React, { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { useProducts } from "../context/ProductProvider";

const Home = () => {
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10">
      <h2>This is homepage</h2>
    </div>
  );
};

export default Home;
