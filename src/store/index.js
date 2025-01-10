
import {configureStore} from "@reduxjs/toolkit";
import postSlice from "./slice/postSlice"
import commentSlice from "./slice/commentSlice"

const store = configureStore({
 reducer: {
    posts: postSlice,
    comments:commentSlice,
 },

})

export default store;