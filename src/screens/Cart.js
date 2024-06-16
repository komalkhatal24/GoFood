import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { useCart, useDispatchCart } from '../components/ContextReducer';
import Payment from "./Payment"; // Import the PaymentForm component

export default function Cart() {
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const data = useCart();
  const dispatch = useDispatchCart();
  
  // Define cartItems only when it is not empty
  const cartItems = data.length > 0 ? data : [];

  if (cartItems.length === 0) {
    return (
      <div>
        <div className='m-5 w-100  h-100 text-center fs-3'>The Cart is Empty!</div>
      </div>
    );
  }

  const handleCheckOut = async () => {
    let userEmail = localStorage.getItem("userEmail");
    let response = await fetch("http://localhost:5000/api/orderData", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        order_data: data,
        email: userEmail,
        order_date: new Date().toDateString()
      })
    });

    if (response.status === 200) {
      dispatch({ type: "DROP" });
      setShowPaymentForm(false); // Hide the payment form after successful checkout
    }
  };

  let totalPrice = cartItems.reduce((total, item) => total + item.price * item.qty, 0);

  return (
    <div className='container m-auto mt-2 table-responsive'>
      {showPaymentForm ? (
        <Payment
          totalPrice={totalPrice}
          handleCheckOut={handleCheckOut}
          setShowPaymentForm={setShowPaymentForm}
          cartItems={cartItems}
        />
      ) : (
        <>
          <table className='table table-hover'>
            <thead className='text-success fs-4'>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>Name</th>
                <th scope='col'>Quantity</th>
                <th scope='col'>Option</th>
                <th scope='col'>Amount</th>
                <th scope='col'></th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index}>
                  <th scope='row'>{index + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.qty}</td>
                  <td>{item.size}</td>
                  <td>${item.price.toFixed(2)}</td>
                  <td><button type="button" className="btn p-0" onClick={() => dispatch({ type: "REMOVE", index })}><DeleteIcon /></button></td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className='d-flex justify-content-between align-items-center'>
            <h1 className='fs-2'>Total: ${totalPrice.toFixed(2)}</h1>
            <div>
              <button className='btn btn-success' onClick={() => setShowPaymentForm(true)}>Proceed to Payment</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
