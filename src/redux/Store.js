import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./Slices/cartSlice";
import { ProductSlice } from "./Slices/productSlice";
import { GetProductsSlice } from "./Slices/getProductsSlice";
// import  CartSlice  from "./Slices/cartSlice";

export const store = configureStore({
    reducer:{
        cart: CartSlice.reducer,
        products: ProductSlice.reducer,
        getProducts: GetProductsSlice.reducer
    }
})