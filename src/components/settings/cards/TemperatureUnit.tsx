/*
 * Imports
*/

/* Dependencies */
// Components
import { Grid, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material'

/* Local */
// Components
import ItemPaper from '../../ItemPaper'

// Types
import TemperatureUnits from '../../../utils/types/TemperatureUnits'

/*
 * Code
*/

type Props = {
  tempType: TemperatureUnits,
  setTempType: (tempType: TemperatureUnits) => void,
}

export default function TemperatureUnit({ tempType, setTempType }: Props): JSX.Element {
  const handleChange = (_: React.ChangeEvent<{}>, value: TemperatureUnits) => {
    if (!value) return

    setTempType(value)
  }

  return (
    <Grid item xs={6}>
      <ItemPaper>
        <Typography variant="h6">Temperature Unit</Typography>

        <ToggleButtonGroup
          value={tempType}
          exclusive
          onChange={handleChange}
        >
          <ToggleButton value="F">°F</ToggleButton>
          <ToggleButton value="C">°C</ToggleButton>
          <ToggleButton value="K">°K</ToggleButton>
        </ToggleButtonGroup>
      </ItemPaper>
    </Grid>
  )
}
