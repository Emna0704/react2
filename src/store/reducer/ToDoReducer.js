import {createSlice} from "@reduxjs/toolkit";
import { fetchTasks, putTask } from "../../api/tasks";

const initialState={
    todos:[],
}

const toDoSlice = createSlice({
 name: "todo",
 reducers: {
 },
 extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchTasks.fulfilled, (state, action) => {
      // Add user to the state array
      state.todos=action.payload
    })
    .addCase(putTask.fulfilled, (state, action) => {
      state.todos = state.todos.map(toDo=>{
        return  toDo.id===action.payload.id ? 
        {
       ...toDo,
       completed: !toDo.completed
        } : toDo
      })
    })
  },
 
 initialState
})

export const {
    setTodos
 
} = toDoSlice.actions


export default toDoSlice.reducer