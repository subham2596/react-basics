
import React, {useState} from "react";
import './paymentMode.css';



function PaymentMode(props){
    const [pay, setPay] = useState('Pay Now');
    function paymentHandler(){
        console.log(props.title);
        setPay('Payment Done')
        setInterval(()=>{
            setPay('Pay Now')
        },3000)
        
        console.log(pay, setPay);

        let display = document.getElementById('display');
        display.innerHTML = 'Your payment of '+ props.amount +' was successful using - '+ props.title;
    }

    return(
        <div className="pyCard" >
            <img src={props.image} className="pyCardImg"/>
            <h3>{props.amount}</h3>
            <h3>{props.title}</h3>
            <button className="btn" onClick={paymentHandler}> {pay}</button>
        </div>
    )
}

export default PaymentMode;