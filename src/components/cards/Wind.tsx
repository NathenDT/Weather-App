/*
 * Imports
*/

/* Dependencies */
// Components
import { Skeleton, Typography } from '@mui/material'

/* Locals */
// Types
import Units from '../../utils/types/Units'
import Weather from '../../utils/types/Weather'

/*
 * Code
*/

type Props = {
  loading: boolean,
  weather: Weather,
  unitType: Units,
}

export default function WindCard({ loading, weather, unitType }: Props): JSX.Element {
  return (
    <>
      <Typography variant="h5">Wind</Typography>
      
      <Typography>
        {loading ? <Skeleton /> : unitType === 'metric' ? `${weather.wind.speed} m/s` : `${(weather.wind.speed * 2.237).toFixed(1)} mph`}
      </Typography>
    </>
  )
}
