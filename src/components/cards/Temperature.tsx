/*
 * Imports
*/

/* Dependencies */
// Components
import { Skeleton, Typography } from '@mui/material'

// Styles
import { Thermostat } from '@mui/icons-material'

/* Local */
// Function
import TemperatureConverter from '../../utils/TemperatureConverter'

// Components
import Card from '../Card'

// Types
import Weather from '../../utils/types/Weather'

// Types
import TemperatureUnits from '../../utils/types/TemperatureUnits'

/*
 * Code
*/

type Props = {
  loading: boolean,
  weather: Weather,
  temperatureUnits: TemperatureUnits
}

export default function TemperatureCard({ loading, weather, temperatureUnits }: Props): JSX.Element {  
  return (
    <>
      <Title />

      <Typography variant="h4">
        {loading ? <Skeleton /> : `${TemperatureConverter(weather.main.temp, 'K', temperatureUnits)}°${temperatureUnits}`}
      </Typography>

      <Typography>
        {loading ? <Skeleton /> : `It feels like ${TemperatureConverter(weather.main.feels_like, 'K', temperatureUnits)}°${temperatureUnits}`}
      </Typography>

      <Typography>
        {loading ? <Skeleton /> : `${TemperatureConverter(weather.main.temp_min, 'K', temperatureUnits)}°${temperatureUnits} Low to ${TemperatureConverter(weather.main.temp_max, 'K', temperatureUnits)}°${temperatureUnits} High`}
      </Typography>
    </>
  )
}

function Title(): JSX.Element {
  return (
    <Typography variant="h5">
      <Thermostat style={{ fontSize: '1.5rem' }} /> Temperature
    </Typography>
  )
}
