/*
 * Imports
*/

/* Dependency */
// Components
import { Grid, Typography } from '@mui/material'

/* Local */
// Interfaces
import Weather from '../utils/interfaces/Weather'

/*
 * Code
*/

type Props = {
  weather: Weather
}

export default function WeatherCard({ weather }: Props) {
  return (
    <Grid
      item
      xs = {6}
    >
      <img src = 'https://openweathermap.org/img/wn/10d@2x.png' />

      <Typography>{weather.weather[0].main}</Typography>
      
      <Typography>{weather.weather[0].description}</Typography>
    </Grid>
  )
}