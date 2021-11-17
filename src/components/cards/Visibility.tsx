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

export default function VisibilityCard({ loading, weather }: Props): JSX.Element {
  return (
    <>
      <Typography variant="h5">Visibility</Typography>

      <Typography>{loading ? <Skeleton /> : getVisibility(weather.visibility)}</Typography>
    </>
  )
}

function getVisibility(visibility: number): string {
  if (visibility < 1000) {
    return `${visibility} m`
  }

  return `${(visibility / 1000).toFixed(1)} km`
}
