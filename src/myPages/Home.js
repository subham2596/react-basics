

import './home.css';
import Coder from '../myImages/coder.jpg';

function Home(){
    return (
        <div className="mainContainer">
            <div className='header'>
            <h1>Welcome to Let's JavaScript!</h1>
            <h2>Glad to see you here! 😄</h2>
            </div>

            <div className='intro'>
                {/* <h3>Quick Introduction</h3> */}
                <div className='introContent'>
                    <img src={Coder} className='introImage'/>
                    <div className='introText'>
                        <p><strong> Hello Reader,</strong></p>
                        <p>This is Subham Prasad Bhagat, another developer in the IT industry.</p>
                        <p>I am a 'To Be' MERN Stack Developer who is passionate in learning just like you!</p>
                        <p>Just thought of creating a group where we can discuss about small to big every concept and every error we meet while coding!</p>
                        <p>Join this group to help me and yourself, <strong>Happy Learning </strong> :)</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Home;