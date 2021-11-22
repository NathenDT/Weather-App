/*
 * Imports
*/

/* Dependencies */
// Components
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid } from '@mui/material'

/* Locals */
// Components
import Theme from './cards/Theme'
import Unit from './cards/Unit'

// Types
import ThemeTypes from '../../../utils/types/ThemeTypes'
import Units from '../../../utils/types/Units'

/*
 * Code
*/

type Props = {
  open: boolean,
  themeType: ThemeTypes,
  unitType: Units,
  setOpen: (open: boolean) => void,
  setThemeType: (themeType: ThemeTypes) => void,
  setUnitType: (unitType: Units) => void,
}

export default function Settings({
  open,
  themeType,
  unitType,
  setOpen,
  setThemeType,
  setUnitType,
}: Props): JSX.Element {
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
        <Grid container columns={{ xs: 6, sm: 12 }}>
          <Unit
            unitType={unitType}
            setUnitType={setUnitType}
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
