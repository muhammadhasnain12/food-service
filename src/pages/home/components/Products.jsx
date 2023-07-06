import {
  Box,
  Typography,
  Card,
  CardContent,
  Fab,
  CardActionArea
} from '@mui/material'
import { ChevronLeft, ChevronRight } from '@mui/icons-material'
import { useState } from 'react'
import ItemsCarousel from 'react-items-carousel'
import { useMediaQuery } from 'react-responsive'

const Products = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0)
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 600px)' })
  const chevronWidth = 50

  return (
    <div>
      <Typography fontSize={20} py={3} fontWeight={700} textAlign={'center'}>
        TOP SELLING PRODUCTS
      </Typography>
      <div>
        <ItemsCarousel
          requestToChangeActive={setActiveItemIndex}
          activeItemIndex={activeItemIndex}
          numberOfCards={isTabletOrMobile ? 1 : 4}
          gutter={20}
          leftChevron={
            <Fab
              sx={{
                color: 'white',
                backgroundColor: '#213b87',
                ':hover': { backgroundColor: '#213b87' }
              }}
              size="small"
              aria-label="add"
            >
              <ChevronLeft />
            </Fab>
          }
          rightChevron={
            <Fab
              sx={{
                color: 'white',
                backgroundColor: '#213b87',
                ':hover': { backgroundColor: '#213b87' }
              }}
              size="small"
              aria-label="add"
            >
              <ChevronRight />
            </Fab>
          }
          outsideChevron
          chevronWidth={chevronWidth}
        >
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((card, index) => (
            <Card sx={{ maxWidth: 345, margin: { xs: 0, md: 1 } }} key={index}>
              <CardActionArea>
                <Box bgcolor="#353C40" sx={{ height: { xs: 100, md: 320 } }} />
                <CardContent sx={{ backgroundColor: '#f1f5f9' }}>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    textAlign={'center'}
                  >
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </ItemsCarousel>
      </div>
    </div>
  )
}
export default Products
