import React, { useReducer, useContext, useEffect, useState } from "react";
import "./App.css";
import { Provider } from "./production_store/store";
import { reducer, initialState } from "./production_store/reducer";
import AddProduct from "./AddProduct";
import Products from "./Products";
import SearchBar from "./SearchBar";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [showAddProducts, setShowAddProducts] = useState(false);
  const [update, setUpdate] = useState(false);
  const addProducts = () => {
    setShowAddProducts(!showAddProducts);
  };

  return (
    <Provider value={[state, dispatch]}>
      <div className="App">
        <header className="App-header">
          <p className="header-animation">Production Manager</p>
        </header>
        <div className="navbar">
          <SearchBar />
          <div className="addProducts">
            {showAddProducts ? (
              <AddProduct setUpdate={setUpdate} update={update} />
            ) : (
              <button className="button" onClick={addProducts}>
                Create product
              </button>
            )}
          </div>
        </div>
        <Products />
      </div>
    </Provider>
  );
}

export default App;
