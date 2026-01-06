
import './App.css'
import Nav from "./components/Nav"
import Cardes from './pages/Cardes'
import Demo from './components/Demo'
import { Route,Routes,BrowserRouter } from 'react-router-dom'
import Notes from './pages/Notes'
import Sub from './pages/Sub'

function App() {
 

  return (
    <>

     <Nav/>
     {/* <Notes /> */}
     {/* <Cardes/> */}
      <BrowserRouter>
             <Routes>
               <Route path='/' element={<Cardes />}/>
               <Route path='/Demo' element={<Demo />}/>
               <Route path='/Demo/Sub' element={<Sub />}/>
             </Routes>
             </BrowserRouter>
    </>
  )
}

export default App
