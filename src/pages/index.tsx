/*
 * Imports
*/

/* Dependency */
// Functions
import { styled } from '@mui/system'
import { useEffect } from 'react'

// Components
import { Alert, Autocomplete, Grid, Paper, TextField, Typography } from '@mui/material'

/* Local */
// Functions
import isWeatherValid from '../utils/isWeatherValid'

// Components
import WeatherCard from '../components/WeatherCard'
import TempuatureCard from '../components/TemperatureCard'

// Interfaces
import Weather from '../utils/interfaces/Weather'

/*
 * Code
*/

const ItemPaper = styled(Paper)({
  padding: '1rem',
  margin: '0.25rem',
  textAlign: 'center',
  backgroundColor: '#A9A9A9'
})

type Props = {
  weather: Weather,
  loading: boolean,
  error: string
}

export default function Index({ loading, weather, error }: Props): JSX.Element {
  useEffect(() => {
    if(!isWeatherValid(weather)) return

  }, [weather])

  return (
    <>
      {error === '' || <Alert severity = "error">{error}</Alert>}

      <ItemPaper>
        <Typography variant="h3">{`${weather.name}, ${weather.sys.country}`}</Typography>
      </ItemPaper>

      <Grid container>
        <Item>
          <WeatherCard
            loading={loading}
            weather={weather}
          />
        </Item>

        <Item>
          <TempuatureCard
            loading={loading}
            weather={weather}
          />
        </Item>
      </Grid>
    </>
  )
}

type ItemProps = {
  children: any
}

function Item({ children }: ItemProps): JSX.Element {
  return (
    <Grid
      item
      xs = {6}
    >
      <ItemPaper>
        {children}
      </ItemPaper>
    </Grid>
  )
}
