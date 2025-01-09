import toDoSlice from "./reducer/ToDoReducer"
import {configureStore} from "@reduxjs/toolkit";

const store = configureStore({
 reducer: {
    toDoSlice
 },

})

export default store;