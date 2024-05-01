import React from 'react'
import NavbarClient from './components/client/NavbarClient'
import { Outlet } from 'react-router-dom'

export default function ClientApp() {
  return (
   <>
   <NavbarClient/>
   <Outlet/>
   </>
  )
}
