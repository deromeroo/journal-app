import Proptypes from 'prop-types'
import { useSelector } from 'react-redux'
import { Box, Divider, Drawer, List, Toolbar, Typography } from '@mui/material'
import { SideBarItem } from './SideBarItem'

export const SideBar = ({ drawerWidth = 240, showSidebar }) => {
  const { displayName } = useSelector(state => state.auth)
  const { notes } = useSelector(state => state.journal)

  return (
    <Box
        className='animate__animated animate__slideInLeft'
        component='nav'
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
          display: { xs: `${showSidebar ? 'none' : 'block'}`, sm: 'flex' }
        }}
    >
        <Drawer
            variant='permanent'
            open
            sx={{
              // display: { xs: 'block' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: drawerWidth,
                xs: { position: 'block', top: '60px' },
                sm: { top: '0' }
              }
            }}
        >
            <Toolbar>
                <Typography variant='h6' noWrap component='div' color={'primary.main'}>
                    {displayName}
                </Typography>
            </Toolbar>

            <Divider />

            <List
              disablePadding
            >
                {
                    notes.map(note => (
                        <SideBarItem
                            key={note.id}
                            {...note}
                        />
                    ))
                }
            </List>

        </Drawer>
    </Box>
  )
}

SideBar.propTypes = {
  drawerWidth: Proptypes.number.isRequired,
  showSidebar: Proptypes.bool.isRequired
}
