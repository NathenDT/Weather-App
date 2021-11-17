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
  weather: Weather
}

export default function PressureCard({ loading, weather }: Props): JSX.Element {
  return (
    <>
      <Typography variant="h6">Pressure</Typography>
      
      <Typography variant="body1">
        {loading ? <Skeleton /> : weather.main.pressure + ' hPa'}
      </Typography>
    </>
  )
}
