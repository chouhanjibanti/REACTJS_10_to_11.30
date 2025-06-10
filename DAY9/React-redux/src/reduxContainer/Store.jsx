// we will import createStore function for the redux

import {createStore} from "redux"
import BookReducer from "./BookReducer";

// redux store hamri application state ko hold krke rkhta hai

const store = createStore(BookReducer);

export default store;

// react app connect with redux
