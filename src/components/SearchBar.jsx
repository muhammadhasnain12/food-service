import * as React from 'react'
import { Button, TextField } from '@mui/material'

const SearchBar = () => {
  return (
    <form>
      <TextField
        sx={{
          width: { xs: '50%', md: '600px' },
          backgroundColor: 'primary.light',
          '& fieldset': { border: 'none' }
        }}
        placeholder="your email address..."
        size="small"
      />
      <Button
        variant="contained"
        type="submit"
        size="medium"
        sx={{
          height: '39px',
          border: 0,
          borderRadius: 0,
          width: { xs: '95%', md: '12%' }
        }}
      >
        Search
      </Button>
    </form>
  )
}

export default SearchBar
