import { configureStore } from "@reduxjs/toolkit";
import whishlistSlice from "./slices/whishlistSlice";

const store = configureStore({
    reducer:{
        wishlistReducer:whishlistSlice
    }
})

export default store