/*
 * Imports
*/

/* Dependencies */
// Functions
import Cookies from 'universal-cookie'

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
  const cookies = new Cookies()
  
  const handleChange = (_: React.ChangeEvent<{}>, value: ThemeTypes) => {
    if(!value) return

    console.log(value)

    cookies.set('themeType', value, { path: '/' })

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

        {themeType === 'time' && <Typography variant="body1">
          The time theme will change based on sunrise/sunset. 
        </Typography>}
      </ItemPaper>
    </Grid>
  )
}
