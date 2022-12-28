import React from 'react'
import { Footer } from '../footer/footer'
import { Header } from '../header/header'


/*
şimcik burdaki childeren _app.tsx teki component sayfasına eşit oluyor o yüzden
childın altına yazdıkların compınentin altına 
üstüne yazdıkların üstüne eklenecek diye tahmin ediyorum.
*/ 

const MainLayout = ({children}) => {
  return (
    <>
   <Header/>
   {children}
   <Footer/> 
    </>
  )
}

export default MainLayout