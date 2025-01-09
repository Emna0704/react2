import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchTasks = createAsyncThunk(
    'GET_TASKS',
    async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users/1/todos')
      const json = await response.json()
      return json
    },
  )

  export const putTask=createAsyncThunk(
    'EDIT_TASK',
    async(id, body)=>{
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/'+id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      })
      const json = await response.json()
      return json

    }
  )