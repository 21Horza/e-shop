import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: null
    },
    reducers:{
        loginSuccess:(state, action)=>{
            state.currentUser = action.payload;
        },
        logoutUser:(state) => {
            state.currentUser = null
        }
    }
})

export const { loginSuccess, logoutUser } = userSlice.actions;
export default userSlice.reducer;