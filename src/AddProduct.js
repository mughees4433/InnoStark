import React, { useReducer } from "react";
import { reducer, initialState } from "./production_store/reducer";

const AddProduct = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [data, setData] = React.useState({
    productName: "",
    productDetail: "",
    productPrice: "",
    productInventoryDate: "",
  });
  const addProduct = () => {
    dispatch({ type: "SET_PRODUCT", payload: data });
    props.setUpdate(!props.update);
  };
  const setInputFields = (evt) => {
    setData({
      ...data,
      [evt.target.name]: evt.target.value,
    });
  };
  return (
    <>
      <div>
        <input
          className="input"
          placeholder="Enter Product Name"
          type="name"
          name="productName"
          onChange={setInputFields}
        />
        <input
          className="input"
          placeholder="Enter Product Detail"
          type="name"
          name="productDetail"
          onChange={setInputFields}
        />
        <input
          className="input"
          placeholder="Enter Product Price"
          type="number"
          name="productPrice"
          onChange={setInputFields}
        />
        <input
          className="input"
          placeholder="Enter Product Inventory Date"
          type="date"
          name="productInventoryDate"
          onChange={setInputFields}
        />
      </div>
      <button className="button" onClick={addProduct}>
        Add product
      </button>
    </>
  );
};

export default AddProduct;
