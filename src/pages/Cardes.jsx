import React from 'react'
import Ima from '../assets/MCA.jpg'
import Demo from '../components/Demo'
import { Route,Routes,BrowserRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import '../pages/card.css'
function Cardes() {
  
  return (
    <>
    
    <div className='card-container'>
    <div className="card" style={{ width: "18rem" }} >
    <img className="card-img-top" src={Ima} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">MCA 1</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/Demo" class="btn btn-primary">Go somewhere</a>
    {/* <button class="btn btn-primary" onClick={() => navigate('/Demo')}>Go somewhere</button> */}
    {/* <Link to='/Demo'></Link> */}
  </div>
    </div>
    </div>

    </>
  )
}

export default Cardes