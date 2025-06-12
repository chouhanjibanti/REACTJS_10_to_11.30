import React from "react";
import { Provider } from "react-redux";
import BookContainer from "./reduxContainer/BookContainer";
import store from "./reduxContainer/Store";

function App() {
  return (
    <>
      <Provider store={store}> 
        <BookContainer />
      </Provider>
    </>
  );
}

export default App;
