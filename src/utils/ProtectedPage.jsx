/* eslint-disable react/prop-types */
import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoute = ({user}) => {
    const userAuth = user
  return (
    userAuth ? <Outlet/> : <Navigate to="/login" />
  )
}

export default ProtectedRoute