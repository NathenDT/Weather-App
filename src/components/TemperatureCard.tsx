/*
 * Imports
*/

/* Dependency */
// Components
import { Grid, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material'

/* Local */
// Interfaces
import Weather from '../utils/interfaces/Weather'

/*
 * Code
*/

type Props = {
  weather: Weather
}

export default function TemperatureCard({ weather }: Props) {
  
  return (
    <Grid>
      <ToggleButtonGroup>
        <ToggleButton value = "F">°F</ToggleButton>
        <ToggleButton value = "C">°C</ToggleButton>
        <ToggleButton value = "K">°K</ToggleButton>
      </ToggleButtonGroup>

      <Typography variant = "h4">{weather.main.temp}</Typography>
    </Grid>
  )
}
