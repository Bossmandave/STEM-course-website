/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

const MainPage = () => {
  return (
    <>
        <Navbar/>
        <Outlet/>
        <Footer/>
        <ToastContainer/>
    </>
  )
}

export default MainPage