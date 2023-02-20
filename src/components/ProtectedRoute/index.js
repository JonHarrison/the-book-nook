import React from "react"

import { Navigate, Outlet, useLocation } from "react-router-dom"

import { useUserAuth } from "../../context/userAuthContext"

const ProtectedRoute = ({ children, redirectPath = '/login' }) => {
    const { user } = useUserAuth()
    const location = useLocation()

    console.log('ProtectedRoute', user, children, redirectPath, location)

    // if (user === undefined) {
    //     return null; // or loading spinner
    // }

    console.log("Check if user is accessing private route - ", user)
    if (!user) {
        // user is not authenticated
        return <Navigate to={redirectPath} replace state={{ from: location }} />
    }
    return children ? children : <Outlet />
}

export default ProtectedRoute
