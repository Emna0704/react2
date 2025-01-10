import { createAsyncThunk } from '@reduxjs/toolkit'


import axios from "axios";
const url ='https://jsonplaceholder.typicode.com/'

export const fetchPosts = createAsyncThunk("GET_POSTS", async () => {
 const res = await axios.get(url+"users/1/posts")

 
 return res.data;
})

export const fetchCommentByPostId = createAsyncThunk("FETCH_COMMENT", async (id) => {
    const res = await axios.get(url+`/comments?postID=${id}`)
    return res.data;
   })

export const addPost = createAsyncThunk(
    "ADD_POST",
    async (payload) => {
     const res = await axios.post(url+"/posts", payload)
     return res.data
    }
   )





 