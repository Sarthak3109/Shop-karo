import React from 'react'
import { useSelector } from 'react-redux'
import LoginPage from '../Pages/LoginPage'
import { selectUser } from './authSlice'
import { Navigate } from 'react-router-dom'
const Protected = ({children}) => {
    const user = useSelector(selectUser)
   if(!user)return <Navigate to = '/login' />
   return children

}

export default Protected