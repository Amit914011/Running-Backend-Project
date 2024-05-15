import React, { useState } from 'react'
import UserContext from './UserContext'

export default function UserContextProvider2({children}) {
    let [cartList, setCartList] = useState('')
  return (
   <UserContext.Provider value={{cartList, setCartList}}>
    {children}
   </UserContext.Provider>
  )
}
