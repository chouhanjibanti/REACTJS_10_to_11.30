import React from "react";

import { buy_Book } from "./BookTypes";

const initialState = {
  NumberOfBooks: 20,
};

const BookReducer = (state = initialState, action) => {
  switch (action.type) { // buy_Book
    case buy_Book:
      return {
        ...state,
        NumberOfBooks: state.NumberOfBooks - 1, // 20-1 = 19   19-1 =18 
      };
    default:
      return state;
  }
};
// export the reducer so that we can use it in our store 20 19
export default BookReducer;
