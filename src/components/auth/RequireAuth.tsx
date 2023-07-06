import { Navigate } from 'react-router-dom'
import { ROUTES } from '../../utils/constants/AppConstants'
import React from 'react'

const RequireAuth = ({ children, redirectTo = ROUTES.Home }) => {
  const accessToken = ''
  const isAuthenticated = !!accessToken
  return isAuthenticated ? (
    (children as React.ReactElement)
  ) : (
    <Navigate to={redirectTo} />
  )
}

export default RequireAuth
