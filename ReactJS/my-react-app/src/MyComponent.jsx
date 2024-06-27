import {useState} from "react"
function MyComponent()
{
   const [name,setName] = useState('');

   const handleNameChange = (event) =>{
      setName(event.target.value);
   }

   const [comment,setComment] = useState('');

   const handleCommentChange = (event) =>{
      setComment(event.target.value);
   }
   
   const [payment,setPayment] = useState("");

   const handlePaymentChange = (event) =>{
      setPayment(event.target.value);
   }

   const [shipping,setShipping] = useState("");

   const handleShippingChange = (event) =>{
     setShipping(event.target.value);
   }

   return(
     <>
        <input value={name} onChange={handleNameChange} />
        <p>Name: {name}</p>

        <textarea value={comment} onChange={handleCommentChange} placeholder="Enter a comment"></textarea>
        <p>Comment: {comment}</p>

        <select value={payment} onChange={handlePaymentChange}>
          <option value="">Choose a option</option>
          <option value="Visa">Visa</option>
          <option value="MasterCard">MasterCard</option>
          <option value="GiftCard">GiftCard</option>
        </select>
        <p>Payment: {payment}</p>

        <label >
          <input type="radio" value="Pick Up" checked={shipping === "Pick Up"} onChange={handleShippingChange} />
          Pick Up
        </label> <br />
        <label >
          <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={handleShippingChange}/>
          Delivery
        </label>

        <p>Shipping: {shipping}</p>
     </>
   )
}
export default MyComponent