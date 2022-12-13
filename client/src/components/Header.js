import React, { useContext } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import { authContext } from '../lib/authContext'
// import MenuIcon from '@mui/icons-material/Menu'

export default function ButtonAppBar() {
  const { user, setUser } = useContext(authContext)
  function logout() {
    setUser({})
    localStorage.clear()
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color='inherit' onClick={logout}>
            LogOuts
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
