/*
 * Imports
*/

/* Dependency */
// Functions
import { useEffect } from 'react';

// Components
import { Grid, Paper, Typography } from '@mui/material'

import { styled } from '@mui/material/styles'

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

type Props = {
  weather: Weather
}

export default function Index({ weather }: Props): JSX.Element {
  useEffect(() => {
    if(!isWeatherValid(weather)) return

    console.log(weather)
  }, [weather])

  return (
    <>
      <Typography variant = "h3">{`${weather.name}, ${weather.sys.country}`}</Typography>

      <Grid container spacing = {2}>
        <Grid
          item
          xs = {6}
        >
          <img src = "https://openweathermap.org/img/wn/10d@2x.png" />

          <Typography>{weather.weather[0].main}</Typography>

          <Typography>{weather.weather[0].description}</Typography>
        </Grid>

        <TempuatureCard weather = {weather} />
      </Grid>
    </>
  )
}
