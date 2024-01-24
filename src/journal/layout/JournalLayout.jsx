import { useState } from 'react'
import { Box, Toolbar } from '@mui/material'
import { NavBar, SideBar } from '../components'

const drawerWidth = 240

export const JournalLayout = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false)

  return (
    <Box sx={{ display: 'flex' }} className='animate__animated animate__fadeIn'>

        <NavBar drawerWidth={drawerWidth} showSidebar={ showSidebar } setShowSidebar={setShowSidebar} />

        <SideBar drawerWidth={drawerWidth} showSidebar={ showSidebar } />

        <Box component='main' sx={{ flexGrow: 1, p: 3 }}>

            <Toolbar />

            {children}
        </Box>
    </Box>
  )
}
