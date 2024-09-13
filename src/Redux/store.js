import { configureStore } from "@reduxjs/toolkit";
import blogReducer from './Store/Blogs'


const store = configureStore({
    reducer: {
        "blog": blogReducer
    }
})


export { store }