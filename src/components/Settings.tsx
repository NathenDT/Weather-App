/*
 * Imports
*/

/* Dependencies */
// Functions
import { useState } from 'react'

// Components
import { Dialog, DialogContent, DialogTitle, Fab } from '@mui/material'

// Styles
import { Settings as SettingsIcon } from '@mui/icons-material'

/*
 * Code
*/

export default function Settings() {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Fab
        style={{
          position: 'fixed',
          bottom: '20px', 
          right: '20px',
        }}
        onClick={handleOpen}
      >
        <SettingsIcon />
      </Fab>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Settings</DialogTitle>

        <DialogContent>Hello</DialogContent>
      </Dialog>
    </>
  )
}
