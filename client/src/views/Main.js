import React, { useState, useEffect, useContext } from 'react'
import Container from '@mui/material/Container'
import NotesCard from './components/NotesCard'
import Grid from '@mui/material/Grid'
import Fab from '@mui/material/Fab'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import TextField from '@mui/material/TextField'
import { authContext } from '../lib/authContext'
export default function Main() {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const [notes, setNotes] = useState([])

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  }
  return (
    <>
      <Container sx={{ mt: 3 }}>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
        >
          <Box sx={style}>
            <Typography id='modal-modal-title' variant='h6' component='h2'>
              Text in a modal
            </Typography>
            <TextField
              margin='normal'
              required
              fullWidth
              id='email'
              label='Email Address'
              name='email'
              autoComplete='email'
              autoFocus
            />
            <TextField
              margin='normal'
              required
              fullWidth
              id='email'
              label='Email Address'
              name='email'
              autoComplete='email'
              autoFocus
            />
            <Typography id='modal-modal-description' sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Modal>
        <Grid container spacing={2}>
          <NotesCard />
          <NotesCard />
          <NotesCard />
          <NotesCard />
          <NotesCard />
          <NotesCard />
          <NotesCard />
          <NotesCard />
          <NotesCard />
          <NotesCard />
          <NotesCard />
          <NotesCard />
          <NotesCard />
          <NotesCard />
          <NotesCard />
          <NotesCard />
          <NotesCard />
          <NotesCard />
        </Grid>
      </Container>
      <Fab
        color='primary'
        aria-label='add'
        style={{ position: 'fixed', bottom: '2rem', right: '2rem' }}
        onClick={handleOpen}
      >
        sami
      </Fab>
    </>
  )
}
