import { Box, Grid, Typography } from '@mui/material'

const HomeFooter = () => {
  return (
    <div>
      <Grid container sx={{ gap: { xs: 0, md: 5 } }}>
        {[0, 1, 2, 3, 4].map(data => (
          <Grid item xs={6} md={2}>
            <ul style={{ listStyleType: 'none', fontSize: '14px' }}>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
            </ul>
          </Grid>
        ))}
      </Grid>

      <Box
        pt={5}
        px={10}
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'row',
          flexGrow: 1,
          flexBasis: '500px'
        }}
      >
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map(data => (
          <Typography className="lorem">Lorem Ipsum </Typography>
        ))}
      </Box>
    </div>
  )
}

export default HomeFooter
