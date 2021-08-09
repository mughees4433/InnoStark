import React, { useReducer, useContext, useEffect, useState } from "react";
import { reducer, initialState } from "./production_store/reducer";
import Product from "./Product";
import Context from "./production_store/store";
const SearchBar = (props) => {
  const [state, dispatch] = useContext(Context);
  const clearLocalStorage = () => {
    localStorage.clear();
    // dispatch({ type: "CLEAR_PRODUCTS" });
  };
  const setInputFields = (e) => {
    setSearch(e.target.value);
  };
  const [search, setSearch] = useState(null);
  const SearchProduct = () => {
    dispatch({ type: "SET_PRODUCTS_FROM_LOCALSTORAGE" });
    dispatch({ type: "SEARCH_PRODUCT", payload: search });
  };

  return (
    <div className="searchbar">
      <input
        className="input"
        placeholder="Search Product Name"
        type="name"
        name="searchProduct"
        onChange={setInputFields}
      />
      <button className="button" onClick={SearchProduct}>
        Search Product
      </button>

      <button className="button" onClick={clearLocalStorage}>
        Clear all Products
      </button>
    </div>
  );
};

export default SearchBar;
