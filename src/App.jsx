 import React from 'react'
import Header from './components/header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/footer/Footer'
import { LanguageProvider } from './contexts/LanguageContext'
import { AuthProvider } from './contexts/AuthContext'

 export default function App() {
   return (
     <LanguageProvider>
       <AuthProvider>
         <div>
           <Header/>
           <main>
            <Outlet/>
           </main>
           <Footer/>
         </div>
       </AuthProvider>
     </LanguageProvider>
   )
 }
 