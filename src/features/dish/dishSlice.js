import { createSlice } from "@reduxjs/toolkit";
import DISHES from './../../data/dishes';


const initialState = {
    dishes: DISHES
}

export const dishSlice = createSlice({
    name: 'dish',
    initialState,
    reducers: {
        hello: (state) => {
            return state 
        }
    }
})

export const {hello} = dishSlice.actions
export default dishSlice.reducer;

export const selectAlldishes = (state) => state.dishes;
