/*
 * Imports
*/

/* Dependencies */
// Components
import { Typography } from '@mui/material'

/* Locals */
// Components
import ItemPaper from '../ItemPaper'

// Interfaces
import Weather from '../../utils/interfaces/Weather'

/*
 * Code
*/

type Props = {
  weather: Weather
}

export default function PressureCard({ weather }: Props): JSX.Element {
  return (
    <ItemPaper>
      <Typography variant="h6">Pressure</Typography>
      
      <Typography variant="body1">
        {weather.main.pressure} hPa
      </Typography>
    </ItemPaper>
  )
}
