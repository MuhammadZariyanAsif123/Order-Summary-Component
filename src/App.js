import logo from './logo.svg';
import './App.css';
import Hero from './images/illustrationHero.svg'
import IconMusic from './images/icon-music.svg'

function App() {
  return (
    <div className='container'>
      <div className="card" style={{width: '18rem'}}>
  <img className="card-img-top" src={Hero}  alt="Card image cap"/>
  <div className="card-body">
    <h2 className='orderHeader'>Order Summary</h2>
    <p>You can now listen to millions of songs,audiobooks and podcasts on any device anywhere you like!</p>
  </div>
  <div className='annualPlanContainer'>
    <img src={IconMusic} alt='IconMusic'/>
    <ul>
    <li>Annual Plan</li> 
    <li>$59.99/year</li>
    </ul>
    <p>Change</p>
    </div> 
    <button className='btn btn-primary paymentBtn'>Proceed to Payment</button>
    <h3 className='cancelOrder'>Cancel Order</h3>
</div>
     
    </div>
  );
}

export default App;
