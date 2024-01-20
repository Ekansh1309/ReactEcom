import React from 'react'
import "../App.css";
import { useSelector } from 'react-redux'

const FilterSection = ({input,setInput,value,setValue,category,setCategory}) => {

  const {getProducts} = useSelector((state)=>state)

  let filterData= getProducts.filterData

   filterData = [...new Set(filterData)];

  function clickHandler(data){
    setCategory(data)
  }

  function onChangeHandler(event){
    setValue(parseInt(event.target.value, 10));
  }

  function onSearchHandler(event){
    setInput(event.target.value)
  }

  return (
    <div className='mt-20 top-0 sticky'>

      <div>
        <input className='w-full mt-5 border-2 border-slate-200 p-1 text-sm  md:w-[140px]'
        type='text'
        placeholder='Search'
        autoComplete='off'
        name="input"
        value={input}
        onChange={onSearchHandler}
        />
      </div>

      <div>
        <p className='font-extrabold text-lg mt-5 mb-2 ' >Categories</p>
      </div>
      {/* underline decoration-solid */} 
      {
        filterData.map((data,key)=>{
          return (
            <div>
            <button key={key} className={` filter-button text-sm my-2 ${data === category ? "text-blue-600 transition duration-100 ease-in font-semibold scale-110  " : ""} `}
              onClick={()=>clickHandler(data)} >{data.toUpperCase()}</button>
            </div>
          )
        })
      }

      <div className='text-sm mt-5'>
        <label for="points">Range:</label>
        <span>{value}</span> <br/>
        <input 
        name='value'
        type="range" id="points" 
        value={value} 
        min="0" max="1100"
        onChange={onChangeHandler}
        ></input>
      </div>


    </div>
  )
}

export default FilterSection
