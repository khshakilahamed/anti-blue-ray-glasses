import { actionTypes } from "../../context/actionTypes";

export const initialState = {
  loading: false,
  products: [],
  error: false,
  orders: [],
};

export const productReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.FETCHING_START:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case actionTypes.FETCHING_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
        error: false,
      };
    case actionTypes.FETCHING_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case actionTypes.MAKE_ORDER:
      return {
        ...state,
        orders: [...state.orders, action.payload],
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};
