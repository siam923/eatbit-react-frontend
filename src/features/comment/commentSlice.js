import { createSlice } from "@reduxjs/toolkit";
import COMMENTS from './../../data/comments';


const initialState = {
    comments: COMMENTS
}

export const commentSlice = createSlice({
    name: 'comment',
    initialState,
    reducers: { //contains action handling
        increment: (state) => {
            state.count += 1;
        }
    }
})

// export const {action names} = dishSlice.actions
// also export default the dishSlice.reducer
export const {increment} = commentSlice.actions
export default commentSlice.reducer;


//Asynchronous action 
// Async actions are handled here with redux thunk