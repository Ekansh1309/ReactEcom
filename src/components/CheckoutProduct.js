import React from 'react'

const CheckoutProduct = ({item}) => {
    const Subtotal= item.quantity * item.price
  return (
    <tr>
      {/* <br/> */}
        <td>
          <img src={item.image} alt="Product Image" class="item-image"/>
          <p>{item.title}</p>
        </td>
        <td>${item.price}</td>
        <td>{item.quantity}</td>
        <td>${Subtotal}</td>
      {/* <br/> */}
    </tr>
  )
}

export default CheckoutProduct
