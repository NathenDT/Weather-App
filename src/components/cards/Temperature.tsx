/*
 * Imports
*/

/* Dependencies */
// Components
import { ToggleButton, ToggleButtonGroup, Typography } from '@mui/material'

// Styles
import { Thermostat } from '@mui/icons-material'

/* Local */
// Function
import TemperatureConverter from '../../utils/TemperatureConverter'

// Components
import ItemPaper from '../ItemPaper'

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
  tempType: TemperatureUnits,
  setTempType: (tempType: TemperatureUnits) => void
}

export default function TemperatureCard({ loading, weather, tempType, setTempType }: Props): JSX.Element {  
  return (
    <ItemPaper>
      <Title loading={loading} />

      <ToggleTempType
        tempType={tempType}
        setTempType={setTempType}
      />

      <Typography variant="h4">
        {`${TemperatureConverter(weather.main.temp, 'K', tempType)}°${tempType}`}
      </Typography>

      <Typography>
        {`It feels like ${TemperatureConverter(weather.main.feels_like, 'K', tempType)}°${tempType}`}
      </Typography>

      <Typography>
        {`${TemperatureConverter(weather.main.temp_min, 'K', tempType)}°${tempType} Low to ${TemperatureConverter(weather.main.temp_max, 'K', tempType)}°${tempType} High`}
      </Typography>
    </ItemPaper>
  )
}

type TitleProps = {
  loading: boolean
}

function Title({ loading }: TitleProps): JSX.Element {
  return (
    <Typography variant="h5">
      <Thermostat style={{ fontSize: '1.5rem' }} /> Temperature
    </Typography>
  )
}

type ToggleTempTypeProps = {
  tempType: TemperatureUnits,
  setTempType: (tempType: TemperatureUnits) => void
}

function ToggleTempType({ tempType, setTempType }: ToggleTempTypeProps): JSX.Element {
  const handleChange = (_: any, newValue: TemperatureUnits) => {
    if(!newValue) return

    setTempType(newValue)
  }

  return (
    <ToggleButtonGroup
      value={tempType}
      exclusive
      onChange={handleChange}
      style={{ margin: '1em' }}
    >
      <ToggleButton value="F">°F</ToggleButton>
      <ToggleButton value="C">°C</ToggleButton>
      <ToggleButton value="K">°K</ToggleButton>
    </ToggleButtonGroup>
  )
}
