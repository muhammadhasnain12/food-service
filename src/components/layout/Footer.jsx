import * as React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  YouTube
} from '@mui/icons-material'

const Footer = () => (
  <Box
    mt={10}
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'primary.main',
      flexDirection: 'column'
    }}
    py={4}
  >
    <Stack direction={'row'} gap={3} sx={{ color: ' white' }}>
      <Facebook />
      <Instagram />
      <LinkedIn />
      <Twitter />
      <YouTube />
    </Stack>

    <Typography
      component={'div'}
      fontsize={15}
      fontWeight={500}
      color={'primary.light'}
      pt={3}
    >
      2017 - 2021 Magna Foodservice Ltd. All Rights Reserved.{' '}
    </Typography>
  </Box>
)

export default Footer
