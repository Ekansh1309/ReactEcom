import React from 'react'
import "../App.css";
import { IoGrid } from "react-icons/io5";
import { FaThList } from "react-icons/fa";

const Sort = ({gridView,setGridView}) => {
  return (
    <div className='sort inline-block'>
      <button className={` text-sm ml-3 p-1 ${gridView ? "bg-black text-white" : ""}  `} >
        <IoGrid onClick={()=>setGridView(true)}/> 
      </button> 
      <button className= {`text-sm mr-3 p-1 ${!gridView ? "bg-black text-white" : ""}  `} >
        <FaThList onClick={()=>setGridView(false)} />
      </button>
    </div>
  )
}

export default Sort
