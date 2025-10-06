/* eslint-disable react/prop-types */
import { createBrowserRouter, createRoutesFromElements, RouterProvider,Route, Navigate } from "react-router-dom"
import MainPage from "./Layout/MainPage"
import HomePage from "./pages/HomePage/HomePage"
import Login from "./pages/LoginPage/Login"
import SignUp from "./pages/SignUpPage/SignUp"
import ForgetPass from "./pages/ForgetPassPage/ForgetPass"
import ProfilePage from "./pages/ProfilePage/ProfilePage"
import { useEffect, useState } from "react"
import { auth } from "./common/firebase"
import ProtectedRoute from "./utils/ProtectedPage"



function App() {
  const[user, setUser] =useState()
  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      setUser(user)
    })
  })
  
  const router = createBrowserRouter (
  createRoutesFromElements(
    <Route path="/" element={<MainPage/>}>
      <Route index element={<HomePage/>}/>
      <Route element={<ProtectedRoute user={user}/>}>
        <Route path="/profile" element={<ProfilePage/>}/>
      </Route>
      <Route path="/login" element={user ? <Navigate to="/profile" /> : <Login/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/forget-password" element={<ForgetPass/>}/>
      
    </Route>
  )
)
  return (
    <RouterProvider router={router}/>
  )
}

export default App
