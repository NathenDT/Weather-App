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
  weather: Weather
}

export default function SunCard({ loading, weather }: Props): JSX.Element {
  return (
    <>
      <Typography variant="h5">Sun</Typography>

      <Typography variant="h6">Sunrise</Typography>
      <Typography variant="body1">{loading ? <Skeleton /> : getTime(weather.sys.sunrise)}</Typography>

      <Typography variant="h6">Sunset</Typography>
      <Typography variant="body1">{loading ? <Skeleton /> : getTime(weather.sys.sunset)}</Typography>
    </>
  )
}

function getTime(time: number): string {
  const date = new Date(time * 1000)

  return date.toLocaleTimeString()
}
