import {
  AppBar,
  IconButton,
  Stack,
  TextField,
  Toolbar,
  Typography,
  Box,
  FormControl,
  MenuItem,
  Select,
  InputAdornment,
  Button,
  styled,
  ButtonBase
} from '@mui/material'
import { useState } from 'react'
import { Search } from '@mui/icons-material'

const images = [
  {
    url: 'https://media.istockphoto.com/id/1241881284/photo/hands-of-cook-photographing-mexican-tacos.jpg?s=612x612&w=0&k=20&c=zFkJ71PlN32cgEpEiuKxVwb5f89fZoI9xt4xfyRhQUM=',
    title: 'Breakfast',
    width: '100%'
  }
]

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,
  //   [theme.breakpoints.down('sm')]: {
  //     width: '100% !important', // Overrides inline-style
  //     height: 100
  //   },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15
    },
    '& .MuiImageMarked-root': {
      opacity: 0
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor'
    }
  }
}))

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%'
})

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white'
}))

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: 'black',
  opacity: 0.4
  //   transition: theme.transitions.create('opacity')
}))

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: 'white',
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)'
  //   transition: theme.transitions.create('opacity')
}))

const NewsLetter = () => {
  const [selectedOption, setSelectedOption] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  const handleOptionChange = event => {
    setSelectedOption(event.target.value)
  }

  const handleSearchChange = event => {
    setSearchTerm(event.target.value)
  }

  return (
    <Box
      my={10}
      py={5}
      sx={{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)',
        width: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
        backgroundColor: 'black',
        zIndex: 0,
        opacity: 0.9,
        px: { xs: 2, md: 20 }
      }}
    >
      <Stack
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'start'
        }}
        width={'100%'}
        direction={'column'}
        color={'white'}
      >
        <Typography
          sx={{ fontSize: { xs: '14px', md: '17px' } }}
          fontFamily={'cursive'}
        >
          JOIN OUR NEWSLETTER
        </Typography>
        <Typography>
          SUBSCRIBE TO OUR NEWSLETTER WITH YOUR EMAIL BELOW:
        </Typography>
      </Stack>

      <form
        style={{
          display: 'flex',
          alignItems: 'center',
          paddingTop: '20px',
          flexWrap: 'wrap'
        }}
      >
        <FormControl variant="outlined">
          <Select
            value={selectedOption}
            onChange={handleOptionChange}
            displayEmpty
            inputProps={{ 'aria-label': 'Select option' }}
            sx={{
              backgroundColor: 'white',
              boxShadow: 'none',
              '.MuiOutlinedInput-notchedOutline': { border: 0 },
              borderRadius: '0px'
            }}
            size="small"
          >
            <MenuItem value="" disabled>
              Category
            </MenuItem>
            <MenuItem value="option1">Category 1</MenuItem>
            <MenuItem value="option2">Category 2</MenuItem>
            <MenuItem value="option3">Category 3</MenuItem>
          </Select>
        </FormControl>

        <TextField
          sx={{
            width: { xs: '50%', md: '40%' },
            backgroundColor: 'white',
            '& fieldset': { border: 'none' }
          }}
          placeholder="your email address..."
          value={searchTerm}
          onChange={handleSearchChange}
          variant="outlined"
          size="small"
        />
        <Button
          variant="contained"
          type="submit"
          size="medium"
          sx={{
            height: '40px',
            border: 0,
            borderRadius: 0,
            width: { xs: '95%', md: '10%' }
          }}
        >
          Subscribe
        </Button>
      </form>
    </Box>
  )
}

export default NewsLetter
