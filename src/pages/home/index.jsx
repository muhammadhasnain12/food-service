import CommentSection from './components/CommentSection'
import Hero from './components/Hero'
import HomeFooter from './components/HomeFooter'
import NewsLetter from './components/NewsLetter'
import Products from './components/Products'
import Trending from './components/Trending'
import { Box, Grid } from '@mui/material'

const Home = () => (
  <Box>
    <Box
      sx={{
        px: { xs: 2, md: 4, lg: 10 }
      }}
    >
      <Grid container sx={{ mt: 4 }} columnSpacing={5}>
        <Grid item xs={12} md={8}>
          <Hero />
        </Grid>
        <Grid item xs={12} md={4}>
          <Trending />
        </Grid>
        <Grid item xs={12} md={12}>
          <CommentSection />
        </Grid>
        <Grid item xs={12} md={12} style={{ padding: '0px 80px' }}>
          <Products />
        </Grid>
      </Grid>
    </Box>
    <Grid container>
      <Grid item xs={12} md={12}>
        <NewsLetter />
      </Grid>
      <Grid item xs={12} md={12} sx={{ mx: { xs: 3, md: 5 } }}>
        <HomeFooter />
      </Grid>
    </Grid>
  </Box>
)

export default Home
