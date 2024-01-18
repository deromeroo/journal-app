import { SaveOutlined } from '@mui/icons-material'
import { Button, Grid, TextField, Typography } from '@mui/material'
import { ImageGallery } from '../components/ImageGallery'

export const NoteView = () => {
  return (
    <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{ mb: 1 }} className='animate__animated animate__fadeIn'>
        <Grid item>
            <Typography fontSize='39px' fontWeight='light'>
                January 4th, 2024
            </Typography>
        </Grid>

        <Grid item>
            <Button color='primary' sx={{ padding: 2 }}>
                <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                Save
            </Button>
        </Grid>

        <Grid container>
            <TextField
                type='text'
                variant='filled'
                label='Title'
                placeholder='Add title'
                fullWidth
                sx={{
                  border: 'none',
                  mb: 1,
                  mt: 1
                }}
            />

            <TextField
                type='text'
                variant='filled'
                label='Description'
                placeholder='What happened today?'
                multiline
                fullWidth
                minRows={ 5 }
                sx={{ mb: 2 }}
            />
        </Grid>

        <ImageGallery />

    </Grid>
  )
}
