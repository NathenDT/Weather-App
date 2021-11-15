/*
 * Imports
*/

/* Dependencies */
// Components
import { Skeleton, Typography } from '@mui/material'

/* Locals */
// Components
import Card from '../Card'

// Interfaces
import Weather from '../../utils/interfaces/Weather'

/*
 * Code
*/

type Props = {
  loading: boolean,
  weather: Weather
}

export default function PressureCard({ loading, weather }: Props): JSX.Element {
  return (
    <Card>
      <Typography variant="h6">Pressure</Typography>
      
      <Typography variant="body1">
        {loading ? <Skeleton /> : weather.main.pressure + ' mb'}
      </Typography>
    </Card>
  )
}
