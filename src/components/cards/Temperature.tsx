/*
 * Imports
*/

/* Dependencies */
// Components
import { Skeleton, Typography } from '@mui/material'

/* Local */
// Function
import temperatureConverter from '../../utils/temperatureConverter'

// Types
import Weather from '../../utils/types/Weather'

// Types
import TemperatureUnits from '../../utils/types/TemperatureUnits'
import Units from '../../utils/types/Units'

/*
 * Code
*/

type Props = {
  loading: boolean,
  weather: Weather,
  unitType: Units
}

export default function TemperatureCard({ loading, weather, unitType }: Props): JSX.Element {
  const temperatureUnit: TemperatureUnits = unitType === 'imperial' ? 'F' : 'C'

  return (
    <>
      <Typography variant="h5">
        Temperature
      </Typography>

      <Typography variant="h4">
        {loading ? <Skeleton /> :
          `${temperatureConverter(weather.main.temp, 'K', temperatureUnit)}°${temperatureUnit}`
        }
      </Typography>

      <Typography>
        {loading ? <Skeleton /> :
          `It feels like ${temperatureConverter(weather.main.feels_like, 'K', temperatureUnit)}°${temperatureUnit}`
        }
      </Typography>

      <Typography>
        {loading ? <Skeleton /> :
          `${temperatureConverter(weather.main.temp_min, 'K', temperatureUnit)}°${temperatureUnit} Low 
          to ${temperatureConverter(weather.main.temp_max, 'K', temperatureUnit)}°${temperatureUnit} High`
        }
      </Typography>
    </>
  )
}
