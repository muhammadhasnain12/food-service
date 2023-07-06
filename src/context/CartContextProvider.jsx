import { useReducer, createContext, useEffect } from 'react'

const actions = {
  ADD_TO_CART: 'addToCart'
}
const CartContext = createContext([])
const initialState = {
  cartItems: 5
}

const CartReducer = (state, action) => {
  switch (action.type) {
    case actions.ADD_TO_CART:
      return { cartItems: state.cartItems + 1 }
    default:
      return state
  }
}

const CartProvider = props => {
  const [state, dispatch] = useReducer(CartReducer, initialState)

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {props?.children}
    </CartContext.Provider>
  )
}

export { CartContext, CartProvider }
