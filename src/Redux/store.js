import { configureStore } from "@reduxjs/toolkit";
import blogReducer from './Store/Blogs'
import categoryReducer from './Store/Category'
import contactReducer from './Store/Contact';

const store = configureStore({
    reducer: {
        "blog": blogReducer,
        category: categoryReducer,
        contact: contactReducer
    }
})

export { store }
