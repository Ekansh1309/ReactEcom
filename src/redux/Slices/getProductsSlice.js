import { createSlice } from "@reduxjs/toolkit";
import { CartSlice } from "./cartSlice";

export const GetProductsSlice= createSlice({
    name:"getProducts",
    initialState:{
        loading:true,
        isError:false,
        posts:[],
        featurePosts:[],
        filterData: ["All"],
    },
    reducers:{
        setData:(state,action)=>{
            const data= action.payload
            let arr=[];
            let map={};

        

        data.forEach(element => {
          element['quantity']= element.quantity || 0
          if(map[element.category]){
          }
          else{
            arr.push(element);
            map[element.category]=1
          }
        });

            return{
                ...state,
                loading:false,
                isError:false,
                posts:data,
                featurePosts: arr
            }
        },
        setLoading:(state,action)=>{
            return{
                ...state,
                loading:true,
            }
        },
        setError:(state,action)=>{
            return{
                ...state,
                loading:false,
                isError:true
            }
        },
        setFilterData:(state,action)=>{
            const data = action.payload;
            const {filterData} = state
            const tempData= [...filterData]
            return{
                ...state,
                loading:false,
                filterData:[...tempData,...data]
            }
        }

    }
})

export const {setData,setLoading,setError,setFilterData}= GetProductsSlice.actions;
export default GetProductsSlice.reducer;