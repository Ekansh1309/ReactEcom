import React from 'react'
import FilterSection from '../components/FilterSection'
import Sort from '../components/Sort'
import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product"
import ProductinList from '../components/ProductinList';
import { loadProducts,loadSortingValue,sorting,Range,loadRange,loadInput,
        filterInput,loadCategory,filterCategory } from '../redux/Slices/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import { setData } from '../redux/Slices/getProductsSlice';

const ProductPage = () => {
  const dispatch = useDispatch()

  // from store
  const {products,getProducts}=useSelector((state)=>state)
  
  // for Grid
  const [gridView,setGridView]= useState(true)
  
  // On what basis we want our products
  const [basis,setBasis] = useState(products.sorting_value)

  // Price Range of items
  const [value,setValue] = useState(products.range_value);
  
  // for input
  const [input,setInput] = useState('')
  
  const posts = getProducts.posts
  const category = products.category_value
    
    function onChangeHandler(event){
      setBasis(event.target.value);
    }

    useEffect(()=>{
      dispatch(loadProducts(getProducts.posts))
    },[posts,basis,input])

    useEffect(()=>{
      dispatch(loadSortingValue(basis))
    },[basis])

    useEffect(()=>{
      dispatch(sorting(posts))
    },[posts,products.sorting_value,input])

    useEffect(()=>{
      dispatch(loadRange(value))
    },[value])

    useEffect(()=>{
      dispatch(Range(posts))
    },[posts,products.range_value ])

    useEffect(()=>{
      dispatch(loadInput(input))
    },[input])

    useEffect(()=>{
      dispatch(filterInput())
    },[products.input_value])

    useEffect(()=>{
      console.log(category)
      dispatch(loadCategory(category)) 
    },[category])

    useEffect(()=>{
      dispatch(filterCategory())
    },[posts,products.category_value])

  
  return (
    <div className={` flex ${gridView ? "max-w-6xl" : "max-w-4xl"}  mx-auto `} >

      <div className=' relative w-[180px]  px-2 '>
        <FilterSection input={input} setInput={setInput}
        value={value} setValue={setValue} 
        category={category}
        />
      </div>

    <div className='w-full'>
      <div className='mt-5 flex justify-around' >
        <Sort gridView={gridView} setGridView={setGridView} />

        <select className='border-2 border-gray-300 text-sm '
        value={basis}
        onChange={onChangeHandler}
        >
          <option value="sortby">Sort By</option>
          <option value="lowtohigh">Price(low to high)</option>
          <option value="hightolow">Price(high to low)</option>
          <option value="ratelh">Rate(low to high)</option>
          <option value="ratehl">Rate(high to low)</option>
        </select>
        
      </div>
      <h1 className='mt-2 text-center font-bold text-lg md:text-2xl' >Top Products</h1>
    {
  getProducts.loading ? (
    <Spinner />
  ) : products.filterProducts.length > 0 ? (
    <div className={`flex ${gridView ? "flex-wrap" : "flex-col"} justify-center max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]`}>
      {products.filterProducts.map((post) => (
        (post.category === category || category === "All") && (post.price<=value) && (
          gridView ? <Product key={post.id} post={post} /> : <ProductinList key={post.id} post={post} />
        )
      ))}
    </div>
  ) : (
    <div className="flex justify-center items-center">No data found</div>
  )
}
  </div>

  </div>

  )
}

export default ProductPage


