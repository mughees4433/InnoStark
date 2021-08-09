import React, { useReducer, useContext, useEffect, useState } from "react";
import { reducer, initialState } from "./production_store/reducer";
import Product from "./Product";
import Context from "./production_store/store";
import "./Products.css";
const Products = (props) => {
  const [state, dispatch] = useContext(Context);

  return (
    <>
      {state.products?.length > 0 ? (
        <>
          <h1>Product List</h1>
          <div className="productsDiv">
            {state.products.map((product) => {
              return <Product Product={product} />;
            })}
          </div>
        </>
      ) : (
        <>Please add Products</>
      )}
    </>
  );
};

export default Products;
