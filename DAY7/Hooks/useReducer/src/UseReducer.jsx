import React, { useReducer } from "react";

const UseReducer = () => {
  const API_URL = "https://jsonplaceholder.typicode.com/posts";

  const handleAPIResponse = (state, action) => {
    const { type } = action;
    switch (type) {
      case "PENDING":
        return { ...state, loading: true };
      case "FULLFILL":
        return { ...state, loading: false, data: action.payload };
      case "REJECT":
        return { ...state, loading: false, error: action.error };
    }
  };

  const initialState = {
    loading: false,
    data: null,
    error: "",
  };

  // APIState -> current state (loading , data , error)
  // dispatch -> function to update state by dispatching actions (PENDING , FULLFILL , REJECT)
  //  useReducer(2 arguments) -> (handleAPIResponse , initialState)

  const [APIState, dispatch] = useReducer(handleAPIResponse, initialState);

  const fetchAPI = async () => {
    dispatch({ type: "PENDING" });
    console.log("pending.........");
    try {
      const APIResponse = await fetch(API_URL);
      const data = await APIResponse.json();

      dispatch({ type: "FULLFILL", payload: data });
      console.log("Fullfilled.....");
    } catch (err) {
      dispatch({ type: "REJECT", err: "API Fetch Unsuccessfully" });
      console.log(`Rejected......${err}`);
    }
  };

  return (
    <>
      {APIState.loading && (
        <div>
          <h1>loading......</h1>
        </div>
      )}

      {APIState.data &&
        APIState.data.map((user, id) => (
          <li key={id}>
            {user.title} <br />
            {user.body}
            {user.userId}
          </li>
        ))}

      {APIState.error && (
        <div>
          <h1>{APIState.error}</h1>
        </div>
      )}
      <button onClick={fetchAPI}>fetchAPI</button>
    </>
  );
};

export default UseReducer;
