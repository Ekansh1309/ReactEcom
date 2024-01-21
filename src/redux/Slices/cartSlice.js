import { createSlice } from "@reduxjs/toolkit";


function getLocalCartData(){
    let newCartData= localStorage.getItem("EcomCart")
    const parsedData = JSON.parse(newCartData)
    if(!Array.isArray(parsedData)){
        return []
    }
    else return parsedData
}

export const CartSlice= createSlice({
    name:"cart",
    initialState: getLocalCartData(),
    // initialState: [],
    reducers: {
        add:(state,action)=>{
            const {post}= action.payload
            state.push({...post,quantity:post.quantity || 1})
        },
          
        remove: (state, action) => {
            const itemIdToRemove = action.payload;
            const updatedState = state.filter(item => item.id !== itemIdToRemove);
            console.log("after remove")
            console.log(updatedState)
            return updatedState;
          },

        addQuantity: (state, action) => {
            const { id, quan } = action.payload;
            return state.map((item) => (item.id === id ? { ...item, quantity: quan } : item));
        },
    }
})

export const {add,remove,addQuantity}= CartSlice.actions;
export default CartSlice.reducer;