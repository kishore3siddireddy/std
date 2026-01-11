
import './App.css'
import Nav from "./components/Nav"
import Cardes from './pages/Cardes'
import Demo from './components/Demo'
import { Route,Routes,BrowserRouter,useLocation } from 'react-router-dom'
import Notes from './pages/Notes'
import Sub from './pages/Sub'
import Sub2 from './pages/Sub2'
import Banner from './components/Banner'
import Sub3 from './pages/Sub3'

function Layout(){
   const location = useLocation()
   const hideBanner = location.pathname.startsWith("/Demo")

   return(
    <>
     <Nav />

      {!hideBanner && <Banner />}

      <Routes>
        <Route path='/' element={<Cardes />} />
        <Route path='/Demo' element={<Demo />} />
        <Route path='/Demo/Sub' element={<Sub />} />
        <Route path='/Demo/Sub2' element={<Sub2 />} />
        <Route path='/Demo/Sub3' element={<Sub3/>}/>
        <Route path='/Demo/Sub/Notes' element={<Notes />} />
      </Routes>
    
    </>
   )
}

function App() {
 

  return (
    <>

     {/* <Nav/>
     <Banner/>
     {/* <Notes /> */}
     {/* <Cardes/> */}
      {/* <BrowserRouter>
             <Routes>
               <Banner/>
               <Route path='/' element={<Cardes />}/>
               <Route path='/Demo' element={<Demo />}/>
               <Route path='/Demo/Sub' element={<Sub />}/>
               <Route path='/Demo/Sub2' element={<Sub2/>}/>
               <Route path='/Demo/Sub/Notes' element={<Notes/>}/>
             </Routes>
             </BrowserRouter>*/}
              <BrowserRouter>
      <Layout />
    </BrowserRouter>
    </>
  )
}

export default App
