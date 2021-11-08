/*
 * Imports
*/

/* Dependencies */
// Components
import { Typography } from '@mui/material'

/* Locals */
// Components
import ItemPaper from './ItemPaper'

// Interfaces
import Weather from '../utils/interfaces/Weather'

/*
 * Code
*/

type Props = {
  weather: Weather
}

export default function WindCard({ weather }: Props): JSX.Element {
  return (
    <ItemPaper>
      <Typography variant="h6">Wind</Typography>
      
      <Typography variant="body1">
        {weather.wind.speed} m/s
      </Typography>
    </ItemPaper>
  )
}
