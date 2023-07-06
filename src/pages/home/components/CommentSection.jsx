import { Box, Paper, Stack, Typography } from '@mui/material'
import { CommentConfig, MainConfig } from '../../../utils/constants/Config'

const CommentSection = () => (
  <div>
    <Typography fontSize={12} fontWeight={400} mt={2} letterSpacing={0}>
      {MainConfig.main_data}
    </Typography>
    <Stack alignItems={'center'} direction={'row'}>
      <Typography py={4} fontSize={'1rem'} fontWeight={'500'} color="#353C40">
        Share on Social Media
      </Typography>
      <Box
        bgcolor="#353C40"
        sx={{
          height: { xs: 20, md: 35 },
          width: { xs: 60, md: 150 },
          ml: { xs: 1, md: 3 }
        }}
      />
    </Stack>
    <Typography fontSize={'1rem'} color="#353C40" fontWeight={'500'}>
      Comments
    </Typography>
    {Object.keys(CommentConfig).map((value, key) => (
      <Box
        py={1}
        pl={(value === 'USERNAME3' || value === 'USERNAME4') && '3rem'}
      >
        <Typography
          component={'div'}
          color="#353C40"
          fontSize={'1rem'}
          fontWeight={'400'}
        >
          {value}
        </Typography>
        <Typography
          component={'div'}
          fontSize={'0.8rem'}
          fontWeight={'200'}
          pt={1}
        >
          {CommentConfig[value]}
        </Typography>
      </Box>
    ))}
  </div>
)

export default CommentSection
