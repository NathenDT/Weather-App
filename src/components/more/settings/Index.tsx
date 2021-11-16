/*
 * Imports
*/

/* Dependencies */
// Components
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid } from '@mui/material'

/* Locals */
// Components
import TemperatureUnit from './cards/TemperatureUnit'
import Theme from './cards/Theme'

// Types
import TemperatureUnits from '../../../utils/types/TemperatureUnits'
import ThemeTypes from '../../../utils/types/ThemeTypes'

/*
 * Code
*/

type Props = {
  open: boolean,
  tempType: TemperatureUnits,
  themeType: ThemeTypes,
  setOpen: (open: boolean) => void,
  setTempType: (tempType: TemperatureUnits) => void,
  setThemeType: (themeType: ThemeTypes) => void
}

export default function Settings({ open, tempType, themeType, setOpen, setTempType, setThemeType }: Props): JSX.Element {
  const handleClose = () => {
    setOpen(false)
  }

  return (
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
  )
}
