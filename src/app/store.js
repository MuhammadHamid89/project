import { configureStore } from "@reduxjs/toolkit";
import blogReducer from '../features/blog/blogSlice'
import userReducer from '../features/user/userSlics'
export const store= configureStore({
    reducer:{
        blogs:blogReducer,
        user:userReducer,
    },
})