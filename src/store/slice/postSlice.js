import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "../../api/api";


const initialState = {
    posts: [],
    manuelPosts: [],
    post: {}
}




const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        getPostById(state, action) {
            state.post = state.posts.find(el => el.id == action.payload)
        },
        addPostManuel(state, action) {
            const length = state.posts.length
            state.manuelPosts.push({ ...action.payload, id: state.posts[length - 1] + 1, userId: 1 })
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.posts = action.payload
        })

    }

})

export const { getPostById, addPostManuel } = postSlice.actions
export default postSlice.reducer