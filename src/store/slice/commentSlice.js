import { createSlice } from "@reduxjs/toolkit";
import { fetchCommentByPostId } from "../../api/api";


const initialState = {
    comments: [],
}




const commentSlice = createSlice({
    name: 'comment',
    initialState,
    reducers: {
        postComment(state, action) {
        state.comments.push(action.payload)

        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCommentByPostId.fulfilled, (state, action) => {
            state.comments = action.payload
        })

    }

})

export const { postComment } =commentSlice.actions
export default commentSlice.reducer