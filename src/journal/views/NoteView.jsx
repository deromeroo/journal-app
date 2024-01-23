import { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Button, Grid, TextField, Typography } from '@mui/material'
import { SaveOutlined } from '@mui/icons-material'
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.css'

import { setActiveNote, startSaveNote } from '../../store/journal'
import { ImageGallery } from '../components/ImageGallery'
import { useForm } from '../../hooks/useForm'

export const NoteView = () => {
  const dispatch = useDispatch()
  const { activeNote, messageSaved, isSaving } = useSelector(state => state.journal)
  const { body, title, date, onInputChange, formState } = useForm(activeNote)

  const dateString = useMemo(() => {
    const newDate = new Date(date)
    return newDate.toUTCString()
  }, [date])

  useEffect(() => {
    dispatch(setActiveNote(formState))
  }, [formState])

  useEffect(() => {
    if (messageSaved.length > 0) {
      Swal.fire('Note updated!', messageSaved, 'success')
    }
  }, [messageSaved])

  const onSaveNote = () => {
    dispatch(startSaveNote())
  }

  return (
    <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{ mb: 1 }} className='animate__animated animate__fadeIn'>
        <Grid item>
            <Typography fontSize='16px' fontWeight='semi-bold' sx={{ color: 'primary.main' }}>
                {dateString}
            </Typography>
        </Grid>

        <Grid item>
            <Button
              disabled={ isSaving }
              onClick={ onSaveNote }
              color='primary'
              sx={{ padding: 1, ':hover': { backgroundColor: 'view.secondary' } }}
            >
                <SaveOutlined sx={{ fontSize: 24, mr: 1 }} />
                Save
            </Button>
        </Grid>

        <Grid container>
            <TextField
                type='text'
                variant='filled'
                label='Title'
                placeholder='Add title'
                name='title'
                value={title}
                onChange={ onInputChange }
                fullWidth
                sx={{
                  border: 'none',
                  mb: 1,
                  mt: 1,
                  backgroundColor: 'view.secondary'
                }}
            />

            <TextField
                type='text'
                variant='filled'
                label='Description'
                placeholder='What happened today?'
                name='body'
                value={body}
                onChange={ onInputChange }
                multiline
                fullWidth
                minRows={ 5 }
                sx={{ mb: 2, backgroundColor: 'view.secondary' }}
            />
        </Grid>

        <ImageGallery />

    </Grid>
  )
}
