import React, { useState } from 'react'
import "../App.css";
import toast from 'react-hot-toast';

const Contact = () => {
  const [formData,setFormData]= useState({
    username: "",
    email:"",
    message:"",
  })

  function onChangeHandler(event){
    const { name, value } = event.target;
    
    setFormData(prev=>{
      return {...prev, [name]:value }
    })
  }


  const [error, setError] = useState('')
  
  function onSubmitHandler(e){
    e.preventDefault()
    console.log(formData)
    e.stopPropagation();

    fetch("https://formcarry.com/s/Uxc1-cI0cXc", {
      method: 'POST',
      headers: { 
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(response => {
      if (response.code === 200) {
       toast.success ("We received your submission, thank you!");
      }
      else if(response.code === 422){
        // Field validation failed
        setError(response.message)
        toast.error("Something Went Wrong")
      }
      else {
        // other error from formcarry
        setError(response.message)
        toast.error("Something Went Wrong")
      }

      setFormData({
        username: "",
        email:"",
        message:"",
      })
      
    })
    .catch(error => {
      // request related error.
      setError(error.message ? error.message : error);
      toast.error("Something Went Wrong")
    });
  }

  return (
    <div>
      <h1 className='my-5 text-center font-bold text-2xl' >Feel Free To Contact Us</h1>
      <div className=''>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224102.42577928517!2d76.80178519453123!3d28.641736100000017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1dce96eb3acd%3A0xd39b01d0a6ebd44f!2sDLF%20Promenade!5e0!3m2!1sen!2sin!4v1704573814667!5m2!1sen!2sin" 
        width="100%" height="450" 
        style={{border:0}} 
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        >
        </iframe>
      </div>

      <div >
          <form action="https://formcarry.com/s/Uxc1-cI0cXc" method="POST"
          enctype="multipart/form-data"
          onSubmit={onSubmitHandler}
          className=' my-5 flex flex-col justify-evenly items-center max-w-3xl h-[400px] mx-auto '
          >
            <div>
              <input className='input w-[400px] border-2 border-slate-300 rounded-lg p-2 text-center'
              id='user'
              name='username'
              type='text'
              placeholder='Enter Username'
              onChange={onChangeHandler}
              value={formData.username}
              required
              autoComplete='off'
              />
            </div>
            <div>
              <input className='input w-[400px] border-2 border-slate-300 rounded-lg p-2 text-center'
              id='mail'
              name='email'
              type='text'
              placeholder='Enter your email'
              onChange={onChangeHandler}
              value={formData.email}
              required
              autoComplete='off'
              />
            </div>
            <div>
              <textarea className='input w-[400px] h-[200px] border-2 border-slate-300 rounded-lg p-2 text-center'
              id='tx'
              name='message'
              type='text'
              placeholder='Enter your message'
              onChange={onChangeHandler}
              value={formData.message}
              required
              autoComplete='off'
              />
            </div>
            
            <button className="button-65">Submit</button>
          </form>
      </div>
      
    </div>
  )
}

export default Contact
