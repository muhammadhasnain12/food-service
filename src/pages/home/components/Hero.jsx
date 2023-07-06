import image2 from '../../../assets/icons/Magna_Logo.png'
import { Box, Typography } from '@mui/material'

const Hero = () => (
  <div>
    <Box bgcolor="#353C40" sx={{ height: { xs: 200, md: 370 } }} />
    <Typography fontWeight={700} fontSize={15} mt={2} letterSpacing={0}>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem
      dolorum veritatis voluptate repudiandae, tempora, beatae nesciunt, aut
      architecto ullam quam porro magnam error.
    </Typography>
  </div>
)

export default Hero
