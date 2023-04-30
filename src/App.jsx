import { useEffect, useState } from "react"

import "./App.css"

import Header from "./components/Header/Header"
import HackDisplay from "./components/HackDisplay/HackDisplay"
import TheForm from "./components/TherForm/TheForm"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"

function App() {
  const noticeText = "comments not showing ? => API Free trial ended"

  // useEffect(()=>{
  //   }
  //   return ()=> resetCount()
  // },[count, hideButton,showApology])

  return (
    <>
      <Navbar />
      <Header />
      <HackDisplay value={noticeText} />
      <TheForm />
      <Footer />
    </>
  )
}
export default App

export function Loading() {
  return <h2>🌀 Loading...</h2>
}
