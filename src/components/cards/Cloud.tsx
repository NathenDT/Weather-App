/*
 * Imports
*/

/* Dependencies */
// Components
import { Skeleton, Typography } from '@mui/material'

/* Locals */
// Components
import Card from '../Card'

// Types
import Weather from '../../utils/types/Weather'

/*
 * Code
*/

type Props = {
  loading: boolean,
  weather: Weather,
}

export default function CloudCard({ loading, weather }: Props): JSX.Element {
  return (
    <>
      <Typography variant="h5">Cloud</Typography>
      
      <Typography>{loading ? <Skeleton /> : `${weather.clouds.all}%`}</Typography>
    </>
  )
}
