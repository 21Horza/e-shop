import { createSlice } from "@reduxjs/toolkit";

const typeSlice = createSlice({
    name: "type",
    initialState: {
        types: []
    },
    reducers:{
        getAllTypes:(state, action)=>{
            state.types = action.payload;
        }
    }
})

export const { getAllTypes } = typeSlice.actions;
export default typeSlice.reducer;