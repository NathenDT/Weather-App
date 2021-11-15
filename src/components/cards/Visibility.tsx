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

export default function VisibilityCard({ loading, weather }: Props): JSX.Element {
  return (
    <Card>
      <Typography variant="h5">Visibility</Typography>

      <Typography>{loading ? <Skeleton /> : weather.visibility}</Typography>
    </Card>
  )
}
