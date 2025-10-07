import React, { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PriceCalculator from './pages/PriceCalculator'
import PolicyPage from './pages/PolicyPage'
import { useLenis } from './context/useLenis'
import ContactPage from './pages/Contact'

const App = () => {

    const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useLenis();

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/quote' element={<PriceCalculator />}/>
        <Route path='/privacy-policy' element={<PolicyPage />}/>
        <Route path='/contact' element={<ContactPage />}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App