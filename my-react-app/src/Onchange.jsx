import React,{useState} from 'react'
function Onchange(){

    const [name,setName] = useState("");
    const [details,setDetail]=useState("");
    const [payment,setPayment]= useState("");
    const [shipping,setShipping] = useState("");
    const handleName = (e) => setName(e.target.value);
    const handleDetail = (e) => setDetail(e.target.value);
    const handlePayment=(e) => setPayment(e.target.value);
    function handleShipping(e){
        setShipping(e.target.value);
    }
    return( 
        <div>
            <input value={name} onChange={handleName}/>
            <p> Name:{name}</p>

            <textarea value={details} placeholder="Enter the details you want" onChange={handleDetail}></textarea>
            <p>Comment: {details}</p>

            <select value={payment} onChange={handlePayment}>
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
            </select>
            <p>Payment: {payment}</p>

            <label >
                <input type="radio" value="Pick Up" checked={shipping === "Pick Up"} onChange={handleShipping}/>
                Pick Up
            </label>
            <br/>
            <label >
            <input type="radio" value="Delivery" checked={shipping === "Delivery"}
            onChange={handleShipping}/>
                Delivery
            </label>
            <p>Mode:{shipping}</p>
        </div>

    );

}
export default Onchange