import React, { useEffect, useState } from 'react'
import UserContext from './UserContext'
import axios from 'axios'

export default function UserContextProvider2({children}) {
    let [cartList, setCartList] = useState('')
    let [auth, setAuth] = useState({
      token: localStorage.getItem('token') || null,
      isAuthenticated: !!localStorage.getItem('token'),
      user: ''
    })

    async function login(username, password){
    let result =   await axios.post('http://localhost:3000/api/clientLogin', {username,password})
    let token = result.data.token
    localStorage.setItem('token', token)
    setAuth({token, isAuthenticated: true, user:username})
    return true
    }

    function logout(){
      localStorage.removeItem('token')
    setAuth({token: null, isAuthenticated: false, user: null})
    }

    async function profile(){
      const token = localStorage.getItem('token');
      if (token) {
          try {
              const response = await axios.get('http://localhost:3000/api/profile', {
                  headers: { 'Authorization': `Bearer ${token}` }
              });
             
              setAuth(prevAuth => ({ ...prevAuth, user:response.data.username }));
          } catch (error) {
              logout();
          }
      }

    }

    useEffect(()=>{
      let token = localStorage.getItem('token')
      if(token){
       try {
        axios.defaults.headers.common['Authorization']  = `Bearer ${token}`
        profile()
       } catch (error) {
        logout()
       }
      }
    }, [])
  return (
   <UserContext.Provider value={{cartList, setCartList, auth, login, logout}}>
    {children}
   </UserContext.Provider>
  )
}
