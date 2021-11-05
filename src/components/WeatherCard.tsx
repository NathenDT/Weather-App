/*
 * Imports
*/

/* Dependency */

// Components
import { Typography } from '@mui/material'

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

export default function WeatherCard({ loading, weather }: Props) {
  return (
    <>
      <img src='https://openweathermap.org/img/wn/10d@2x.png' />

      <Typography variant="h4">{weather.weather[0].main}</Typography>
      
      <Typography>{weather.weather[0].description}</Typography>
    </>
  )
}