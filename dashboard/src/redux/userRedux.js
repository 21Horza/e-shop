import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        users: []
    },
    reducers:{
        getAllusers:(state, action)=>{
            state.users = action.payload;
        }
    }
})

export const { getAllusers } = userSlice.actions;
export default userSlice.reducer;