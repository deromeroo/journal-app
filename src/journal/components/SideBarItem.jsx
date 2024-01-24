import Proptypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { TurnedInNot } from '@mui/icons-material'
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { setActiveNote } from '../../store/journal'

export const SideBarItem = ({ id, title, body, date, imageUrls = [] }) => {
  const dispatch = useDispatch()

  const onClickNote = () => {
    dispatch(setActiveNote({
      id,
      title,
      body,
      date,
      imageUrls
    }))
  }

  return (
    <ListItem disablePadding >
        <ListItemButton
          onClick={ onClickNote}
        >

            <ListItemIcon>
                <TurnedInNot sx={{ color: 'primary.main' }}/>
            </ListItemIcon>

            <Grid
                container
                overflow='hidden'
            >
                <ListItemText
                    disableTypography
                    primary = {title}
                    sx={{
                      width: '100%',
                      color: 'primary.main',
                      whiteSpace: 'nowrap',
                      textOverflow: 'ellipsis',
                      overflow: 'hidden',
                      fontSize: '16px'
                    }}/>
                <ListItemText
                    secondary = {body}
                    disableTypography
                    sx={{
                      color: 'secondary.main',
                      fontSize: '12px'
                    }}
                />
            </Grid>

        </ListItemButton>
    </ListItem>
  )
}

SideBarItem.propTypes = {
  id: Proptypes.string.isRequired,
  title: Proptypes.string.isRequired,
  body: Proptypes.string.isRequired,
  date: Proptypes.number.isRequired,
  imageUrls: Proptypes.array
}
