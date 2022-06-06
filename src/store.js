import { configureStore } from "@reduxjs/toolkit";
import dishReducer from './features/dish/dishSlice'; //comes as default
import commentReducer from './features/comment/commentSlice';


export const store = configureStore({
    reducer: {
        dish: dishReducer,
        comment: commentReducer,
    }
})