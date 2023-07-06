import * as React from 'react'
import './App.css'
import Layout from './components/layout'
import Routings from './router/routing'
import { BrowserRouter as Router } from 'react-router-dom'
import { CartProvider } from './context/CartContextProvider'
export default function App() {
  return (
    <Router>
      <CartProvider>
        <Layout>
          <Routings />
        </Layout>
      </CartProvider>
    </Router>
  )
}
