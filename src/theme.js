import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#213B87',
      light: '#F4F4F4',
      dark: '#A94442'
    },
    secondary: {
      main: '#19857b',
      light: '#fff',
      dark: '#89CCCA'
    },
    error: {
      main: red.A400
    }
  }
})

export default theme
