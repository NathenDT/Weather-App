/*
 * Imports
*/

/* Dependencies */
// Functions
import { useState } from 'react'

// Components
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Fab, Grid } from '@mui/material'

// Styles
import { Settings as SettingsIcon } from '@mui/icons-material'

/* Locals */
// Components
import TemperatureUnit from './cards/TemperatureUnit'
import Theme from './cards/Theme'

// Types
import TemperatureUnits from '../../utils/types/TemperatureUnits'
import ThemeTypes from '../../utils/types/ThemeTypes'

/*
 * Code
*/

type Props = {
  tempType: TemperatureUnits,
  themeType: ThemeTypes,
  setTempType: (tempType: TemperatureUnits) => void,
  setThemeType: (themeType: ThemeTypes) => void
}

export default function Settings({ tempType, themeType, setTempType, setThemeType }: Props): JSX.Element {
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

      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        PaperProps={{
          sx: {
            bgcolor: 'background.default'
          }
        }}
      >
        <DialogTitle>Settings</DialogTitle>

        <DialogContent>
          <Grid container>
            <TemperatureUnit
              tempType={tempType}
              setTempType={setTempType}
            />

            <Theme
              themeType={themeType}
              setThemeType={setThemeType}
            />
          </Grid>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
