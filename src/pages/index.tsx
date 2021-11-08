/*
 * Imports
*/

/* Dependencies */
// Functions
import { useEffect } from 'react'

// Components
import { Alert, Grid, Stack } from '@mui/material'

/* Local */
// Functions
import isWeatherValid from '../utils/isWeatherValid'

// Components
import Footer from '../components/Footer'
import TemperatureCard from '../components/TemperatureCard'
import Title from '../components/Title'
import WeatherCard from '../components/WeatherCard'
import WindCard from '../components/WindCard'

// Interfaces
import Weather from '../utils/interfaces/Weather'

/*
 * Code
*/

type Props = {
  weather: Weather,
  loading: boolean,
  error: string
}

export default function Index({ loading, weather, error }: Props): JSX.Element {
  useEffect(() => {
    if(!isWeatherValid(weather)) return

    // console.log(weather)
  }, [weather])

  return (
    <>
      {error === '' || <Alert severity = "error">{error}</Alert>}

      <Title
        loading={loading}
        weather={weather}
      />

      <Grid container>
        <Column>
          <WeatherCard
            loading={loading}
            weather={weather}
          />

          <WindCard
            weather={weather}
          />
        </Column>
        
        <Column>
          <TemperatureCard
            loading={loading}
            weather={weather}
          />
        </Column>
      </Grid>

      <Footer />
    </>
  )
}

type ColumnProps = {
  children: any
}

function Column({ children }: ColumnProps): JSX.Element {
  return (
    <Grid
      item
      xs = {6}
    >
      <Stack>
        {children}
      </Stack>
    </Grid>
  )
}
