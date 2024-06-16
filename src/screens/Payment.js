import React, { useState, useEffect, useRef } from 'react';
import './Payment.css';

function Payment({ totalPrice, handleCheckOut, setShowPaymentForm, cartItems }) {
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [deliveryOption, setDeliveryOption] = useState('standard');
  const [paymentMethod, setPaymentMethod] = useState('creditCard');
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);
  const paymentFormRef = useRef(null);

  useEffect(() => {
    if (paymentFormRef.current) {
      paymentFormRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const handlePayment = () => {
    // Perform payment logic here
    handleCheckOut();
    setIsPaymentSuccessful(true);
  };

  return (
    <div className="container">
      {isPaymentSuccessful ? (
        <div className="payment-success">
          <h1>Order Successful!</h1>
          <p>Thank you for your order.</p>
        </div>
      ) : (
        <div ref={paymentFormRef}></div>
      )}
      {!isPaymentSuccessful && (
        <div className="payment-form">
          {/* <h1 className="my-4">Payment </h1> */}
          <form>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">Delivery Address</label>
              <input
                type="text"
                className="form-control"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
              <input
                type="text"
                className="form-control"
                id="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="deliveryOption" className="form-label">Delivery Option</label>
              <select
                className="form-select"
                id="deliveryOption"
                value={deliveryOption}
                onChange={(e) => setDeliveryOption(e.target.value)}
              >
                <option value="standard">Standard Delivery</option>
                <option value="express">Express Delivery</option>
              </select>
            </div>
            <h4>Cart Items</h4>
            <ul className="list-group mb-3">
              {cartItems.map((item, index) => (
                <li key={index} className="list-group-item">
                  <strong>{item.name}</strong> - Quantity: {item.qty} - Price: ${item.price.toFixed(2)}
                </li>
              ))}
            </ul>
            <h4>Total Due: ${totalPrice.toFixed(2)}</h4>
            <div className="mb-3">
              <label className="form-label">Payment Method</label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  id="creditCard"
                  value="creditCard"
                  checked={paymentMethod === 'creditCard'}
                  onChange={() => setPaymentMethod('creditCard')}
                />
                <label className="form-check-label" htmlFor="creditCard">
                  Credit Card
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  id="paypal"
                  value="paypal"
                  checked={paymentMethod === 'paypal'}
                  onChange={() => setPaymentMethod('paypal')}
                />
                <label className="form-check-label" htmlFor="paypal">
                  PayPal
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  id="cash"
                  value="cash"
                  checked={paymentMethod === 'cash'}
                  onChange={() => setPaymentMethod('cash')}
                />
                <label className="form-check-label" htmlFor="cash">
                  Cash
                </label>
              </div>
            </div>
            <div className="d-grid gap-2">
              <button className="btn btn-primary" type="button" onClick={handlePayment}>Confirm Payment</button>
              <button className="btn btn-secondary" type="button" onClick={() => setShowPaymentForm(false)}>Cancel</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default Payment;
