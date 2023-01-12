import './App.css'
import LandingPage from './Components/LandingPage/LandingPage'
import { Route, Routes, Link } from 'react-router-dom'
import SunApp from './Components/SunApp'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function App() {

  return (
    <div className="App">
      
      <nav id='navbar'>
        <h5 id="navbar-brand" data-aos="fade-down" data-aos-duration="800" data-aos-delay="300">SunSpotCalc</h5>
        <div id="navbar-links">
          <p className='navLink' 
              data-aos="fade-down" 
              data-aos-duration="800"
              data-aos-delay="500">
                <Link to='/'>Home</Link>
          </p>
          <p className='navLink'
              data-aos="fade-down" 
              data-aos-duration="800"
              data-aos-delay="600"><Link to='/SunSpotCalcApp'>App</Link></p>
          <p className='navLink'
              data-aos="fade-down" 
              data-aos-duration="800"
              data-aos-delay="700"><Link to='/'>Conoce más</Link></p>
        </div>
      </nav>
      
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/SunSpotCalcApp' element={<SunApp />} />
      </Routes>
    </div>
  )
}

export default App
