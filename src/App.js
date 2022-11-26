import {Routes, Route, Link} from 'react-router-dom';

import Home from './myPages/Home';
import About from './myPages/About';
import Payment from './myPages/Payment';

// Component DRY - Do not repest yourself

import './App.css';

function App() {
  return (
    <div className="App">
      <navbar className='navbar'>
      <Link to={'/'} >
        <h2 className='logo'>Let's JavaScript</h2>
      </Link>

        <div className='navLinks'>
          <Link to={'/'} className='link'>Home</Link>
          <Link to={'/about'} className='link'>About</Link>
          <Link to={'/payment'} className='link'>Payment</Link>
        </div>
      </navbar>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/payment' element={<Payment/>} />
      </Routes>

    </div>

    
  );
}

export default App;
