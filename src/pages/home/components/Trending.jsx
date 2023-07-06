import * as React from 'react'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import { Typography, ListItemIcon, List, Box, Rating } from '@mui/material'

const Trending = () => (
  <Box>
    <Typography sx={{ textDecorationLine: 'underline' }} display="inline">
      Trending
    </Typography>
    <List sx={{}}>
      {[1, 2, 3, 4].map(data => (
        <ListItem
          alignItems="flex-start"
          sx={{ paddingLeft: 0, paddingBottom: 0 }}
        >
          <ListItemIcon sx={{ marginTop: 0, minWidth: '47px' }}>
            <Typography
              color={'#d1d5db'}
              letterSpacing={0}
              fontFamily={'revert'}
              fontSize={'30px'}
            >
              0{data}
            </Typography>
          </ListItemIcon>

          <ListItemText
            primary={
              <Typography variant={'body2'} fontWeight={'bold'} gutterBottom>
                News Needs to Meet its Audiences
                <br /> Where They Are
              </Typography>
            }
            secondary={
              <React.Fragment>
                <Typography
                  fontWeight={'bold'}
                  fontSize={10}
                  color="text.primary"
                >
                  Dave Rogers in News
                </Typography>
                <Typography
                  fontWeight={'bold'}
                  fontSize={10}
                  component={'div'}
                  sx={{ display: 'flex', alignItems: 'center' }}
                >
                  jun 14 . 3 min read{' '}
                  <Rating name="no-value" value={null} max={1} />
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
      ))}
    </List>
  </Box>
)

export default Trending
