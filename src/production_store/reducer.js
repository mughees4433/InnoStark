export const initialState = {
  products:
    JSON.parse(localStorage.getItem("products")) == null
      ? []
      : JSON.parse(localStorage.getItem("products")),
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PRODUCT":
      let productObj = state.products;
      productObj.push(action.payload);
      localStorage.setItem("products", JSON.stringify(productObj));
      return {
        ...state,
        products: productObj,
      };
    case "CLEAR_PRODUCTS":
      return {
        ...state,
        products: [],
      };
    case "SET_PRODUCTS_FROM_LOCALSTORAGE":
      return {
        ...state,
        products:
          JSON.parse(localStorage.getItem("products")) == null
            ? []
            : JSON.parse(localStorage.getItem("products")),
      };
    case "SEARCH_PRODUCT":
      let productSearchObj = state.products.filter((product) => {
        return product.productName === action.payload;
      });
      return {
        ...state,
        products: productSearchObj,
      };
    default: {
      return { ...state };
    }
  }
};
