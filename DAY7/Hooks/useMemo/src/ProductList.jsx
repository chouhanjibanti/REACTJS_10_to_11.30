import React from "react";
import { useMemo } from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products, filters }) => {
  const filterProducts = useMemo(() => {
    console.log("Filtering products");
    return products.filter((product) => product.price <= filters.maxPrice);
  }, [products, filters.maxPrice]);
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill , minmax(200px,1fr))",
        gap: "20px",
        marginTop: "20px",
      }}
    >
      {filterProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
