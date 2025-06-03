import React from "react";
// import { useState } from "react";
// import ProductList from "./ProductList";
import UseMemoHook from "./UseMemoHook";

function App() {
  // const [filters, setFilter] = useState({ maxPrice: 500 });

  // const products = [
  //   { id: 1, name: "t-shirt", price: 299 },
  //   { id: 2, name: "shoes", price: 799 },
  //   { id: 3, name: "cap", price: 199 },
  //   { id: 4, name: "watch", price: 999 },
  //   { id: 5, name: "sunglasses", price: 499 },
  // ];
  // return (
  //   //  App.jsx and ProductList.jsx

  //   <div style={{}}>
  //     <h2>Product Filter</h2>
  //     <label>
  //       max Price: Rs{filters.maxPrice}
  //       <br />
  //       <input
  //         type="range"
  //         min="100"
  //         max="1000"
  //         step="50"
  //         value={filters.maxPrice}
  //         onChange={(e) =>
  //           setFilter({ ...filters, maxPrice: Number(e.target.value) })
  //         }
  //       />
  //     </label>

  //     <ProductList products={products} filters={filters} />
  //   </div>
 return(
   <div>
    <UseMemoHook />
  </div>
 )
}

export default App;
