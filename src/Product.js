import React from "react";

const Product = (props) => {
  return (
    <div className="product">
      <h3 className="productName">
        Product Name : {props.Product.productName}
      </h3>
      <h3 className="description">
        Product Detail: {props.Product.productDetail}
      </h3>
      <h3 className="price">Product Price: {props.Product.productPrice}</h3>
      <h3 className="inventryDate">
        Inventory Date: {props.Product.productInventoryDate}
      </h3>
    </div>
  );
};

export default Product;
