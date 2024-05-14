import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Table from './components/Table.jsx'
import AddProduct from './components/AddProduct.jsx'
import ViewProduct from './components/ViewProduct.jsx'
import UpdateProduct from './components/UpdateProduct.jsx'
import ClientApp from './ClientApp.jsx'
import Home from './components/client/Home.jsx'
import AdminLogin from './components/AdminLogin.jsx'
import Protected from './components/Protected.jsx'
import { Cart } from './components/client/Cart.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <>

      <Route path='/' element={<ClientApp />}>
        <Route path='' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
      </Route>

      <Route path='/admin' element={<App />}>
        <Route path='' element={
          <Protected>
             <Table />
          </Protected>
         } />
        <Route path='/admin/addProduct' element={
          <Protected>
            <AddProduct />
          </Protected>
         } />
        <Route path='/admin/adminLogin' element={<AdminLogin />} />
        <Route path='/admin/viewProduct/:id' element={<ViewProduct />} />
        <Route path='/admin/update/:id' element={<UpdateProduct />} />
      </Route>
    </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
