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
  unitType: Units,
  weather: Weather
}

export default function PressureCard({ loading, unitType, weather }: Props): JSX.Element {
  return (
    <>
      <Typography variant="h6">Pressure</Typography>
      
      <Typography variant="body1">
        {loading ? <Skeleton /> : unitType === 'metric' ? `${weather.main.pressure} hPa` : `${(weather.main.pressure * 0.750061683).toFixed(1)} inHg`}
      </Typography>
    </>
  )
}
