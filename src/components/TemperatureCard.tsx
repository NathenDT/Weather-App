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
  loading: boolean,
  weather: Weather
}

export default function TemperatureCard({ loading, weather }: Props): JSX.Element {
  
  return (
    <>
      <ToggleTempType />

      <Typography variant="h4">{weather.main.temp}</Typography>

      <Typography>{weather.main.feels_like}</Typography>

      <Typography>{weather.main.temp_min + ' - ' + weather.main.temp_max}</Typography>
    </>
  )
}

function ToggleTempType(): JSX.Element {
  return (
    <ToggleButtonGroup>
      <ToggleButton value="F">°F</ToggleButton>
      <ToggleButton value="C">°C</ToggleButton>
      <ToggleButton value="K">°K</ToggleButton>
    </ToggleButtonGroup>
  )
}
