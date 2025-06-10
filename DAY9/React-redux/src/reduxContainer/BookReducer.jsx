import React from "react";

import { buy_Book } from "./BookTypes";

const initialState = {
  NumberOfBooks: 20,
};

const BookReducer = (state = initialState, action) => {
  switch (action.type) {
    case buy_Book:
      return {
        ...state,
        NumberOfBooks: state.NumberOfBooks - 1,
      };
    default:
      return state;
  }
};
// export the reducer so that we can use it in our store 20 19
export default BookReducer;
