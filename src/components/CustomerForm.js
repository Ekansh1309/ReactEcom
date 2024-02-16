import React, { useState } from 'react';
import "../App.css";
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';

const CustomerForm = () => {
    const {cart} = useSelector((state)=>state)

  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phoneNumber: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic for handling form submission
    e.stopPropagation();

    const cartDetails = cart.map(item => ({ title: item.title, quantity: item.quantity }));
    let formattedCartDetails = cartDetails.map(item => `${item.title} - Quantity: ${item.quantity}`).join('\n');

    const completeFormData = {
        ...formData,
        cart: formattedCartDetails,
      };

    fetch("https://formcarry.com/s/Uxc1-cI0cXc", {
      method: 'POST',
      headers: { 
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(completeFormData)
    })
    .then(response => response.json())
    .then(response => {
      if (response.code === 200) {
       toast.success ("Your Order Placed SuccessFully, thank you!");
      }
      else if(response.code === 422){
        // Field validation failed
        toast.error("Something Went Wrong")
      }
      else {
        // other error from formcarry
        toast.error("Something Went Wrong")
      }

      setFormData({
        name: '',
        address: '',
        phoneNumber: '',
        email: '',
      })
      
    })
    .catch(error => {
      // request related error.
      toast.error("Something Went Wrong")
    });

    console.log('Form data submitted:', completeFormData);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Customer Details Form</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-semibold mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-sm font-semibold mb-2">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block text-sm font-semibold mb-2">Phone Number</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CustomerForm;
