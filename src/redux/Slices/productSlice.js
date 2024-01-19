import { CreateSlice, createSlice } from "@reduxjs/toolkit";

export const ProductSlice= createSlice({
    name:"products",
    initialState:{
        filterProducts:[],
        allProducts:[],
        sorting_value:"sortby",
        range_value:"1100",
        input_value:'',
        category_value:"All"
    },
    reducers:{
        loadProducts:(state,action)=>{
            const posts=action.payload
            return {
                ...state,
                filterProducts:[...posts],
                allProducts:[...posts]
            }
        },
        loadSortingValue:(state,action)=>{
            const value= action.payload
            return {
                ...state,
                sorting_value: value
            }
        },
        sorting:(state,action)=>{
            let {allProducts} =state
            let sortedData=allProducts;
            let tempData= [...sortedData]

            if(state.sorting_value === "sortby"){
                tempData.sort((a,b)=>a.id - b.id)
                }
                else if(state.sorting_value === "lowtohigh"){
                    tempData.sort((a,b)=> a.price - b.price)
                }
                else if(state.sorting_value === "hightolow"){
                    tempData.sort((a,b)=> b.price - a.price)
                }
                else if(state.sorting_value === "ratelh"){
                    tempData.sort((a,b)=> a.rating.rate - b.rating.rate)
                }
                else if(state.sorting_value === "ratehl"){
                    tempData.sort((a,b)=> b.rating.rate - a.rating.rate)
                }


            return{
                ...state,
                filterProducts:tempData,
                allProducts:tempData
            }
        },
        loadRange:(state,action)=>{
            const value=action.payload
            return{
                ...state,
                range_value:action.payload
            }
        },
        Range:(state,action)=>{
            let {allProducts}= state
            let finalData=[...allProducts]
            finalData = finalData.filter((data)=> data.price<=state.range_value )
            return {
                ...state,
                filterProducts:finalData,
            }
        },
        loadInput:(state,action)=>{
            console.log(action.payload)
            return{
                ...state,
                input_value:action.payload
            }
        },
        filterInput:(state,action)=>{
            let {allProducts}= state
            let tempData=[...allProducts]

            const text= state.input_value

            if(text){
                tempData=tempData.filter((data)=>{
                    return data.title.toLowerCase().includes(text)
                })
            }

            return{
                ...state,
                filterProducts:tempData
            }
        },
        loadCategory:(state,action)=>{
            return {
                ...state,
                category_value:action.payload
            }
        },
        filterCategory:(state,action)=>{
            const {allProducts,category_value}= state
            let tempData= [...allProducts]
            if(category_value==="All"){
                tempData= [...allProducts]
            }
            else{
                tempData= tempData.filter((data)=> data.category === category_value )
            }
            return {
                ...state,
                filterProducts:tempData
            }
        }
    }
})

export const {loadProducts,loadSortingValue,sorting,loadRange,Range,loadInput,filterInput
    ,loadCategory, filterCategory
} = ProductSlice.actions
export default ProductSlice.reducer