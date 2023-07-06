import * as React from 'react'
import Paper from '@mui/material/Paper'
import MenuList from '@mui/material/MenuList'
import MenuItem from '@mui/material/MenuItem'
import ListItemText from '@mui/material/ListItemText'
import { Box } from '@mui/material'

const TopMenueBar = () => {
  return (
    <Box
      px={6}
      color={'primary.light'}
      sx={{
        maxWidth: '100%',
        backgroundColor: 'primary.main',
        height: '50px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <Box>Food Blogs | Inspirations | Kitchen Stories | News</Box>
      <Box>Login / Register My Account</Box>
    </Box>
  )
}

export default TopMenueBar
