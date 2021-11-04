/*
 * Imports
*/

/* Dependency */
// Functions
import { useEffect } from 'react';

// Components
import { Autocomplete, Grid, Paper, TextField, Typography } from '@mui/material'

import { styled } from '@mui/material/styles'

/* Local */
// Functions
import isWeatherValid from '../utils/isWeatherValid'

// Components
import WeatherCard from '../components/WeatherCard'
import TempuatureCard from '../components/TemperatureCard'

// Interfaces
import City from '../utils/interfaces/City'
import Weather from '../utils/interfaces/Weather'

/*
 * Code
*/

type Props = {
  weather: Weather,
  cities: Array<City>
}

export default function Index({ weather, cities }: Props): JSX.Element {
  useEffect(() => {
    if(!isWeatherValid(weather)) return

    console.log(weather)
  }, [weather])

  return (
    <>
      <Autocomplete
        disablePortal
        options={cities.map((city: City, index: number) => {
          return {
            label: city.name, value: index
          }
        })}
        renderInput = {(params) => <TextField {...params} label="Search" variant="outlined" />}
      />

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
