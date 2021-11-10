/*
 * Imports
*/

/* Dependencies */
// Components
import { Grid, Typography } from '@mui/material'

/* Local */
// Componets
import ItemPaper from '../ItemPaper'

// Interfaces
import Weather from '../../utils/interfaces/Weather'

/*
 * Code
*/

type Props = {
  loading: boolean,
  weather: Weather
}

export default function WeatherCard({ loading, weather }: Props) {
  return (
    <ItemPaper>
      <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />

      <Typography variant="h4">{weather.weather[0].main}</Typography>
      
      <Typography>{`${weather.name} has ${weather.weather[0].description}`}</Typography>
    </ItemPaper>
  )
}
