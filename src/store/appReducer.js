import { combineReducers } from "redux";

import * as actions from "../store/actionTypes.js";
import products from "../data/products.json";

const normalizedProducts = products.reduce((acc, curr) => {
  acc[curr.id] = curr;
  return acc;
}, {});

function purchasesReducer(state = {}, action) {
  switch (action.type) {
    case actions.ADD_PRODUCT:
      return {
        ...state,
        [action.payload.productId]: {
          ...action.payload.productId,
        },
      };

    default:
      return state;
  }
}

function productsReducer(state = { ...normalizedProducts }, action) {
  switch (action.type) {
    case actions.ADD_PRODUCT:
      return state;

    default:
      return state;
  }
}

export default combineReducers({
  purchases: purchasesReducer,
  products: productsReducer,
});
