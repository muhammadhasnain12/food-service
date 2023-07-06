import MenueBar from '../MenueBar'
import TopMenueBar from '../TopMenueBar'
import Footer from './Footer'
import Header from './Header'
import Meta from './Meta'
import { useMediaQuery } from 'react-responsive'

const Layout = ({ children }) => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 600px)' })

  return (
    <div>
      <Meta />
      {!isTabletOrMobile && <TopMenueBar />}
      <Header />
      {!isTabletOrMobile && <MenueBar />}
      <div>
        <div>{children}</div>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
