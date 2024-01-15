import Proptypes from 'prop-types'
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import { TurnedInNot } from '@mui/icons-material'

export const SideBar = ({ drawerWidth = 240 }) => {
  return (
    <Box
        component='nav'
        sx={{
          width: { sm: drawerWidth }, flexShrink: { sm: 0 }
        }}
    >
        <Drawer
            variant='permanent'
            open
            sx={{
              display: { xs: 'block' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
            }}
        >
            <Toolbar>
                <Typography variant='h6' noWrap component='div'>
                    deromeroo
                </Typography>
            </Toolbar>
            <Divider />

            <List>
                {
                    ['Enero', 'Febrero', 'Abril'].map(text => (
                        <ListItem key={ text } disablePadding >
                            <ListItemButton>

                                <ListItemIcon>
                                    <TurnedInNot sx={{ color: 'primary.main' }}/>
                                </ListItemIcon>

                                <Grid container>
                                    <ListItemText primary = {text} sx={{ color: 'primary.main' }}/>
                                    <ListItemText secondary = 'Tempor eiusmod culpa velit nulla dolore.' />
                                </Grid>

                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>

        </Drawer>
    </Box>
  )
}

SideBar.propTypes = {
  drawerWidth: Proptypes.number.isRequired
}
