import * as React from 'react'
import Paper from '@mui/material/Paper'
import MenuList from '@mui/material/MenuList'
import MenuItem from '@mui/material/MenuItem'
import ListItemText from '@mui/material/ListItemText'

const MenueBar = () => {
  return (
    <Paper
      sx={{
        maxWidth: '100%',
        backgroundColor: 'primary.light',
        boxShadow: 'none'
      }}
    >
      <MenuList
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          px: '5rem'
        }}
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
            <ListItemText
              sx={{ fontSize: '3rem !important', fontWeight: 'bold' }}
            >
              {data}
            </ListItemText>
          </MenuItem>
        ))}
      </MenuList>
    </Paper>
  )
}

export default MenueBar
