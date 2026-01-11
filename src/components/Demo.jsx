import React from 'react'
import logo from '../assets/textbook.jpg'
import logo2 from '../assets/c_language.jpg'
import logo3 from '../assets/27217.jpg'
import logo4 from '../assets/6272280.jpg'
// import Sub from '../pages/Sub'
// import { Route,Routes,BrowserRouter } from 'react-router-dom'



function Demo() {
  return (
    <div>
       {/* <BrowserRouter>
             <Routes>
               <Route path='/Demo/Sub' element={<Sub />}/>
             </Routes>
             </BrowserRouter> */}

      <div className="container">
        <div className="row">
          <div className="col-12 col-md-3">
            <div className='card-container'>
              <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src={logo} alt="Card image cap"/>
                  <div class="card-body">
                     <h5 class="card-title">NOTES</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="/Demo/Sub3" class="btn btn-primary">Go somewhere</a>
                  </div>
              </div>

            </div>
          </div>
          <div className="col-12 col-md-3">
             <div className='card-container'>
              <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src={logo2} alt="Card image cap"/>
                  <div class="card-body">
                     <h5 class="card-title">MODAL PAPER</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="/Demo/Sub2" class="btn btn-primary">Go somewhere</a>
                  </div>
              </div>

            </div>

          </div>
          <div className="col-12 col-md-3">
            <div className='card-container'>
              <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src={logo3} alt="Card image cap" />
                  <div class="card-body">
                     <h5 class="card-title">VIDEOS</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="/Demo/Sub" class="btn btn-primary">Go somewhere</a>
                  </div>
              </div>

            </div>
          </div>
          <div className="col-12 col-md-3">
             <div className='card-container'>
              <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src={logo4} alt="Card image cap"/>
                  <div class="card-body">
                     <h5 class="card-title">PROJECTS</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="/Demo/Sub" class="btn btn-primary">Go somewhere</a>
                  </div>
              </div>

            </div>

          </div>
        </div>
                {/* <div className="row">
          <div className="col-12 col-md-6">
            <div className='card-container'>
              <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src={logo} alt="Card image cap"/>
                  <div class="card-body">
                     <h5 class="card-title">VIDEOS</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
              </div>

            </div>
          </div>
          <div className="col-12 col-md-6">
             <div className='card-container'>
              <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src={logo} alt="Card image cap"/>
                  <div class="card-body">
                     <h5 class="card-title">PROJECTS</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
              </div>

            </div>

          </div>
          
        </div> */}
      
      </div>
    </div>
  )
}

export default Demo