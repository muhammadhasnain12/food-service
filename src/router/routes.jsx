// import { ROUTES } from '../constants/AppConstants'
import { ROUTES } from '../utils/constants/AppConstants'

import Home from '../pages/home'
import Information from '../pages/information'

export const routes = [
  {
    path: ROUTES.Home,
    element: <Home />
  },
  {
    path: ROUTES.LoginScreen,
    element: '/'
  },
  {
    path: ROUTES.SignUpScreen,
    element: '/'
  }
]

export const privateRoutes = [
  {
    path: ROUTES.Information,
    element: <Information />
  }
]
