import { useDispatch, useSelector } from 'react-redux'
import { IconButton } from '@mui/material'
import { AddOutlined } from '@mui/icons-material'
import { startNewNote } from '../../store/journal'
import { JournalLayout } from '../layout/JournalLayout'
import { NoteView, NothingSelectedView } from '../views'

export const JournalPage = () => {
  const dispatch = useDispatch()
  const { isSaving, activeNote } = useSelector(state => state.journal)

  const onClickNewNote = () => {
    dispatch(startNewNote())
  }
  return (
    <JournalLayout>

      {
       (!!activeNote)
         ? <NoteView />
         : <NothingSelectedView />
      }

      <IconButton
        onClick={ onClickNewNote }
        disabled={isSaving}
        size='large'
        sx={{
          color: 'white',
          backgroundColor: 'primary.main',
          ':hover': { backgroundColor: 'secondary.main' },
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }}/>

      </IconButton>
    </JournalLayout>
  )
}
