
import PaymentMode from "./PaymentMode";
import './payment.css'
import Phonepe from '../myImages/phonepe.jpg'
import Gpay from '../myImages/gpay.jpg'

let modes = [
    {image: Phonepe, amount: '100$' , title:'Phonepe'},
    {image: Gpay, amount: '100$', title:'Google Pay' }
]

function Payment(){
    return (
        <div className="mainContainer">
            <div className='header'>
                <h2>This is Payment Gateway page.</h2>
                <p>Some examples of useState Hooks - not completely accurate - just basic implementation as of now.</p>
            </div>
            <div className="cardContainer">
                {
                    modes.map((mode)=>{
                        return(
                            <PaymentMode image={mode.image} amount={mode.amount} title={mode.title}/>
                        )
                    })
                }
            </div>

            <div id="display">
                <p>Payment Status</p>

            </div>

        </div>
    )
}

export default Payment;