import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
    name: "user",
    initialState: {
        currentAdmin: null
    },
    reducers:{
        loginAdmin:(state, action)=>{
            state.currentAdmin = action.payload;
        },
        logoutAdmin:(state) => {
            state.currentAdmin = null
        }
    }
})

export const { loginAdmin, logoutAdmin } = adminSlice.actions;
export default adminSlice.reducer;