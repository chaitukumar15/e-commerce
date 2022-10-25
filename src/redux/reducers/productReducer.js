import { combineReducers } from "redux";
import { googleData } from "../actions/actions";

let initialState = {
  count: 0,
  ProductList: [],
  cart: [],
  googleDataValue: [],
};

let reducerFun = (state = initialState, action) => {
  if (action.type === "ProductsList") {
    return {
      ...state,
      ProductList: action.payload,
    };
  } else if (action.type === "CartList") {
    return {
      ...state,
      cart: [...state.cart, action.payload],
    };
  } else if (action.type === "cartDelete") {
    let deleteCartDelete = state.cart.filter((val) => val !== action.payload);
    console.log(deleteCartDelete);
    console.log("delete" + action.payload);
    return {
      ...state,
      cart: [...deleteCartDelete],
    };
  } else if (action.type === "increment") {
    return {
      ...state,
      count: state.count + 1,
    };
  } else if (action.type === "decrement") {
    return {
      ...state,
      count: state.count - 1,
    };
  } else if (action.type === "gmail") {
    return {
      ...state,
      googleDataValue: [...state.googleDataValue, action.payload],
    };
  }
  return state;
};

export const reducers = combineReducers({
  allProducts: reducerFun,
});
