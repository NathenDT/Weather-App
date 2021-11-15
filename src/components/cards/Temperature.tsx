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

// Interfaces
import Weather from '../../utils/interfaces/Weather'

// Types
import TemperatureUnits from '../../utils/types/TemperatureUnits'

/*
 * Code
*/

type Props = {
  loading: boolean,
  weather: Weather,
  tempType: TemperatureUnits
}

export default function TemperatureCard({ loading, weather, tempType }: Props): JSX.Element {  
  return (
    <Card>
      <Title />

      <Typography variant="h4">
        {loading ? <Skeleton /> : `${TemperatureConverter(weather.main.temp, 'K', tempType)}°${tempType}`}
      </Typography>

      <Typography>
        {loading ? <Skeleton /> : `It feels like ${TemperatureConverter(weather.main.feels_like, 'K', tempType)}°${tempType}`}
      </Typography>

      <Typography>
        {loading ? <Skeleton /> : `${TemperatureConverter(weather.main.temp_min, 'K', tempType)}°${tempType} Low to ${TemperatureConverter(weather.main.temp_max, 'K', tempType)}°${tempType} High`}
      </Typography>
    </Card>
  )
}

function Title(): JSX.Element {
  return (
    <Typography variant="h5">
      <Thermostat style={{ fontSize: '1.5rem' }} /> Temperature
    </Typography>
  )
}
