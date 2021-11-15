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

export default function SunCard({ loading, weather }: Props): JSX.Element {
  return (
    <Card>
      <Typography variant="h5">Sun</Typography>

      <Typography variant="h6">Sunrise</Typography>
      <Typography variant="body1">{loading ? <Skeleton /> : getTime(weather.sys.sunrise)}</Typography>

      <Typography variant="h6">Sunset</Typography>
      <Typography variant="body1">{loading ? <Skeleton /> : getTime(weather.sys.sunset)}</Typography>
    </Card>
  )
}

function getTime(time: number): string {
  const date = new Date(time * 1000)

  return date.toLocaleTimeString()
}
