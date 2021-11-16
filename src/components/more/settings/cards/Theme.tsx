/*
 * Imports
*/

/* Dependencies */
// Components
import { Grid, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material'

/* Local */
// Components
import ItemPaper from '../../../ItemPaper'

// Types
import ThemeTypes from '../../../../utils/types/ThemeTypes'

/*
 * Code
*/

type Props = {
  themeType: ThemeTypes,
  setThemeType: (themeType: ThemeTypes) => void,
}

export default function Theme({ themeType, setThemeType }: Props): JSX.Element {
  const handleChange = (_: React.ChangeEvent<{}>, value: ThemeTypes) => {
    if(!value) return

    setThemeType(value)
  }
  return (
    <Grid item xs={6}>
      <ItemPaper>
        <Typography variant="h6">Theme</Typography>

        <ToggleButtonGroup
          value={themeType}
          exclusive
          onChange={handleChange}
        >
          <ToggleButton value="light">Light</ToggleButton>
          <ToggleButton value="dark">Dark</ToggleButton>
          <ToggleButton value="time">Time</ToggleButton>
        </ToggleButtonGroup>
      </ItemPaper>
    </Grid>
  )
}
