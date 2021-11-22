/*
 * Imports
*/

/* Dependencies */
// Functions
import { useState } from 'react'

// Components
import { Alert, AlertTitle, Button, Dialog, DialogActions, DialogContent, Grid, IconButton, Typography } from '@mui/material'

// Styles
import { Help } from '@mui/icons-material'

/*
 * Code
*/

export default function ToggleCookies(): JSX.Element {
  const
    [aboutOpen, setAboutOpen] = useState<boolean>(false),
    [display, setDisplay] = useState<boolean>(true)

  return (
    display ? <>
      <Alert
        severity="info"
        action={<Actions
          setAboutOpen={setAboutOpen}
          setDisplay={setDisplay}
        />}
        style={{ margin: '0.25em' }}
      >
        <AlertTitle>
          Cookies are delicious!!!
        </AlertTitle>
      </Alert>

      <About
        open={aboutOpen}
        setDisplay={setDisplay}
        setOpen={setAboutOpen}
      />
    </> : <></>
  )
}

type ActionsProps = {
  setAboutOpen: (aboutOpen: boolean) => void,
  setDisplay: (display: boolean) => void
}

function Actions({ setAboutOpen, setDisplay }: ActionsProps): JSX.Element {
  return (
    <Grid container spacing={1}>
      <Grid item>
        <IconButton onClick={() => setAboutOpen(true)}>
          <Help />
        </IconButton>
      </Grid>

      <Grid item>
        <Button
          variant="contained"
          onClick={() => setDisplay(false)}
        >
          Agree
        </Button>
      </Grid>
    </Grid>
  )
}

type AboutProps = {
  open: boolean,
  setDisplay: (display: boolean) => void,
  setOpen: (open: boolean) => void,
}

function About({ open, setDisplay, setOpen }: AboutProps): JSX.Element {
  const cookiesMessage: string = 'This website uses cookies to enhance the user experience. Cookies save data on your computer that is used to personalise content. '

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Dialog
      fullWidth
      open={open}
      onClose={handleClose}
      PaperProps={{
        sx: {
          bgcolor: 'background.default'
        }
      }}
    >
      <DialogContent>
        <Typography>
          {cookiesMessage}
        </Typography>
      </DialogContent>

      <DialogActions>
        <Button
          variant="contained"
          onClick={() => setDisplay(false)}
        >
          Agree
        </Button>

        <Button onClick={handleClose}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  )
}
