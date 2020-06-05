import { combineReducers } from "redux";

import products from "../data/products.json";

const normalizedProducts = products.reduce((acc, curr) => {
  acc[curr.id] = curr;

  return acc;
}, {});
console.log(normalizedProducts);

function appReducer(state = { ...normalizedProducts }, action) {
  switch (action.type) {
    case "ADD_PRODUCT":
      return state;

    default:
      return state;
  }
}

export default appReducer;
