// first component
// book action is action creator
// action creator is a function that returns an action object.
// BookAction - purchase_book

import React from "react";
import { buy_Book } from "./BookTypes";

const BookAction = () => {
  return {
    type: buy_Book,
  };
};

export default BookAction;
// rafce - shortcut for the arrow type function
// rfce - shorcut for the function declaration 
