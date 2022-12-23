import React from 'react'
import About from './About'
import Home from './Home'
import Products from './Products'
import Contact from './Contact'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

const App = () => {

const theme = {
  colors: {

  },
  media: {mobile: "768px", tab:"998px"}
}

  return (
    <ThemeProvider theme={theme}>
   <BrowserRouter>
   <Header />
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
      <Route path="/contact" element={<Contact />} />
    </Routes> 
    <Footer />  
   </BrowserRouter>
   </ThemeProvider>
  ) 
}

export default App