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
      if (state.hasOwnProperty(action.payload.product.id)) {
        // let defaultValue = 0;

        return {
          ...state,
          [action.payload.product.id]: {
            ...action.payload.product,
            qty: 77777, // HOW TO INCREMENT BY 1??????
          },
        };
      } else {
        return {
          ...state,
          [action.payload.product.id]: {
            ...action.payload.product,
            qty: 1,
          },
        };
      }

    case actions.DELETE_PRODUCT:
      const duplicateState = { ...state };
      delete duplicateState[action.payload.id];

      return {
        ...duplicateState,
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
