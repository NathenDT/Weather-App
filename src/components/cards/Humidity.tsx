/*
 * Imports
*/

/* Dependencies */
// Components
import { Skeleton, Typography } from '@mui/material'

/* Locals */
// Types
import Weather from '../../utils/types/Weather'

/*
 * Code
*/

type Props = {
  loading: boolean,
  weather: Weather,
}

export default function HumidityCard({ loading, weather }: Props): JSX.Element {
  return (
    <>
      <Typography variant="h5">Humidity</Typography>

      <Typography>{loading ? <Skeleton /> : `${weather.main.humidity}%`}</Typography>
    </>
  )
}
