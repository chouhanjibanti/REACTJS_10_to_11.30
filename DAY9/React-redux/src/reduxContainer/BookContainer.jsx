import React from "react";
import BookAction from "./BookAction";
import { useDispatch, useSelector } from "react-redux";

function BookContainer() {
  const noOfBook = useSelector((state) => state.NumberOfBooks);// 19

  const dispatch = useDispatch();
  return (
    <>
      <div>BookContainer</div>
      <h2>No Of Books - {noOfBook}</h2>
      <button onClick={() => dispatch(BookAction())}>Buy book</button>
    </>
  );
}

export default BookContainer;
