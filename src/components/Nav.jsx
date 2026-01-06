import React from 'react'
import logo from "../assets/books.png"




function Nav() {
  return (
    <div>
   <nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    
    <a class="navbar-brand" href="#">  <img src={logo} alt="book" width="30" height="30" />Study Material</a>
  </div>
</nav>
    </div>
  )
}

export default Nav
