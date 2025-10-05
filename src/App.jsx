import React, { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PriceCalculator from './pages/PriceCalculator'
import PolicyPage from './pages/PolicyPage'

const App = () => {

    const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/quote' element={<PriceCalculator />}/>
        <Route path='/privacy-policy' element={<PolicyPage />}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App