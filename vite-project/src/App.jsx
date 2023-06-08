// import { ChakraProvider,Link,Box} from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './Component/NavBar'
// import Footer from './Component/Footer.Jsx'
import Home from './Component/Home.Jsx'
import AboutMe from './Component/AboutMe'
import NotFound from './Component/NotFound'

function App() {
 

  return (
    <>
     <NavBar></NavBar>
     {/* <AboutMe></AboutMe> */}
     {/* <Home></Home> */}
     {/* <Footer></Footer> */}
   
<Routes>
  <Route path='/' element={<Home/>}></Route>
     <Route path='/about' element={<AboutMe/>}></Route>
     <Route path='/*' element={<NotFound/>}></Route>
     <Route path='/home' element={
      <div>
        <Home/>
      </div> 
   }
   >

   </Route>
     </Routes>
    
    </>
  )
}

export default App
