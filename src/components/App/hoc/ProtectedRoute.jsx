import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const ProtectedRoute = ({ component: Component, ...props }) => {
  return <Route>{() => (props.authorizeUser ? <Component {...props} /> : <Redirect to='/' />)}</Route>
}
export default ProtectedRoute
