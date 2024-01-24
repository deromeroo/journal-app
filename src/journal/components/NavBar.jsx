import { useDispatch } from 'react-redux'
import Proptypes from 'prop-types'

import { LogoutOutlined, MenuOutlined } from '@mui/icons-material'
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material'

import { startLogout } from '../../store/auth'

export const NavBar = ({ drawerWidth = 240, setShowSidebar, showSidebar }) => {
  const dispatch = useDispatch()

  const onLogout = () => {
    dispatch(startLogout())
  }

  const onShowSidebar = () => {
    setShowSidebar(!showSidebar)
  }

  return (
    <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px )` },
          ml: { sm: `${drawerWidth}px` }
        }}
    >
        <Toolbar>
            <IconButton
                onClick={ onShowSidebar }
                color='inherit'
                edge='start'
                sx={{
                  mr: 2,
                  display: { sm: 'none' },
                  ':hover': { backgroundColor: 'view.secondary' }
                }}
            >
                <MenuOutlined />
            </IconButton>

            <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                <Typography variant='h6' noWrap component='div'>
                    Journal App
                </Typography>

                <IconButton color='inherit' onClick={ onLogout } sx={{ ':hover': { backgroundColor: 'view.secondary' } }}>
                    <LogoutOutlined />
                </IconButton>
            </Grid>

        </Toolbar>

    </AppBar>
  )
}

NavBar.propTypes = {
  drawerWidth: Proptypes.number.isRequired,
  showSidebar: Proptypes.bool.isRequired,
  setShowSidebar: Proptypes.func.isRequired
}
