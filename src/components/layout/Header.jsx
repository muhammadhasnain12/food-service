import * as React from 'react'
import {
  Typography,
  Badge,
  Box,
  AppBar,
  IconButton,
  Toolbar,
  MenuItem
} from '@mui/material'
import Menu from '@mui/material/Menu'
import { ShoppingBasket, Favorite, AccountCircle } from '@mui/icons-material'
import MenuIcon from '@mui/icons-material/Menu'
import logoImage from '../../assets/icons/Magna_Logo.png'
import SearchBar from '../SearchBar'
import { useMediaQuery } from 'react-responsive'
import { CartContext } from '../../context/CartContextProvider'

const IconData = [
  {
    name: 'Account',
    icon: <AccountCircle />
  },
  {
    name: 'Favourites',
    icon: <Favorite />
  },
  {
    name: 'Basket',
    icon: <ShoppingBasket />
  }
]

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null)
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 600px)' })
  const { state, dispatch } = React.useContext(CartContext)
  const isMenuOpen = Boolean(anchorEl)
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null)
  }

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget)
  }

  const menuId = 'primary-search-account-menu'

  const mobileMenuId = 'primary-search-account-menu-mobile'
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {[
        'MAIN MENUE',
        'INFORMATION',
        'FOOD BLOG',
        'SOCIAL FEED',
        'LATEST NEWS',
        'KITCHEN STORIES',
        'BEST SELLERS'
      ].map(data => (
        <MenuItem>
          <p>{data}</p>
        </MenuItem>
      ))}
    </Menu>
  )

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: 'secondary.light',
          height: '100px',
          boxShadow: 'none'
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}
        >
          <img src={logoImage} alt="Magna food" width={'146px'} />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          ></Typography>
          <Box>{!isTabletOrMobile && <SearchBar />}</Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {IconData.map(data => (
              <IconButton
                size="large"
                edge="end"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                className="flex-column"
              >
                {data.name === 'Basket' ? (
                  <Badge
                    badgeContent={state.cartItems}
                    color="primary"
                    onClick={() => dispatch({ type: 'addToCart' })}
                  >
                    {data.icon}
                  </Badge>
                ) : (
                  data.icon
                )}
                <Typography fontSize={12}>{data.name}</Typography>
              </IconButton>
            ))}
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </Box>
  )
}

export default Header
