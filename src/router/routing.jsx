import { Routes, Route } from 'react-router-dom'
import RequireAuth from '../components/auth/RequireAuth'
import { ROUTES } from '../utils/constants/AppConstants'
import { routes, privateRoutes } from './routes'

const Routings = () => (
  <Routes>
    {routes.map(routeProps => (
      <Route {...routeProps} key={routeProps.path} />
    ))}
    {privateRoutes.map(({ element, ...privateRouteProps }) => (
      <Route
        element={<RequireAuth redirectTo={ROUTES.Home}>{element}</RequireAuth>}
        {...privateRouteProps}
        key={`privateRoute-${privateRouteProps.path}`}
      />
    ))}
  </Routes>
)

export default Routings
