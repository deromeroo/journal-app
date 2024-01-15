import { StarOutline } from '@mui/icons-material'
import { Grid, Typography } from '@mui/material'

export const NothingSelectedView = () => {
  return (
    <Grid
      container
      spacing={ 0 }
      direction='column'
      alignItems='center'
      justifyContent='center'
      borderRadius={ 3 }
      sx={{
        minHeight: 'calc(100vh - 110px)',
        backgroundColor: 'view.main'
      }}
    >
      <Grid item xs={ 12 }>
        <StarOutline sx={{ fontSize: 100, color: 'white' }} />
      </Grid>

      <Grid item xs={ 12 }>
        <Typography color='white' variant='h5'>
          Select or create an entry
        </Typography>
      </Grid>
    </Grid>
  )
}
