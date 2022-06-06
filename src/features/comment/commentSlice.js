import { createSlice } from "@reduxjs/toolkit";
import COMMENTS from './../../data/comments';


const initialState = {
    comments: COMMENTS,
    //for async tracking
    status: 'idle',
    error: null
}

export const commentSlice = createSlice({
    name: 'comment',
    initialState,
    reducers: { //contains action handling
        addComment: (state=initialState, action) => {
            state.comments.push({
                ...action.payload,
                id: state.comments.length, 
                date: new Date().toISOString(),
            });
        }
    }
})

// export const {action names} = dishSlice.actions
// also export default the dishSlice.reducer
export const {addComment} = commentSlice.actions
export default commentSlice.reducer;

//abstracting all data with a single var 
export const selectAllComments = state => state.comments
export const selectCommentById = (state, id) => {
    state.comments.find(comment => comment.id === id)
}
//Asynchronous action 
// Async actions are handled here with redux thunk