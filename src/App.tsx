require('dotenv').config()

/*
 * Imports
*/

/* Dependencies */
// Functions
import { useEffect, useState } from 'react'

// Styles
import { CssBaseline, ScopedCssBaseline } from '@mui/material'
import { createTheme, Theme ,ThemeProvider, styled } from '@mui/material/styles'

/* Local */
// Function
import timeTheme from './utils/timeTheme'

// Components
import Head from './components/Head'
import Index from './pages'

// Interfaces
import Weather from './utils/interfaces/Weather'

// Styles
import './styles/App.scss'

/*
 * Code
*/

const APIKEY = process.env.APIKEY || 'b5220e56efb144f47112992e18a84270'

const darkTheme: Theme = createTheme({
  palette: {
    background: {
      default: '#3B3C40',
    },
    text: {
      primary: '#EFEFED'
    }
  }
})

const lightTheme: Theme = createTheme({
  palette: {
    background: {
      default: '#EFEFED',
    },
    text: {
      primary: '#3B3C40'
    }
  }
})

export default function App(): JSX.Element {
  const
    [loading, setLoading] = useState<boolean>(true),
    [weather, setWeather] = useState<Weather>({
      coord: { lon: 0, lat: 0 },
      weather: [{ id: 0, main: '', description: '', icon: '' }],
      base: '',
      main: { temp: 0, feels_like: 0, temp_min: 0, temp_max: 0, pressure: 0, humidity: 0 },
      visibility: 0,
      wind: { speed: 0, deg: 0 },
      clouds: { all: 0 },
      dt: 0,
      sys: { type: 0, id: 0, country: '', sunrise: 0, sunset: 0 },
      timezone: 0,
      id: 0,
      name: '',
      cod: 0
    }),
    [themeType, setThemeType] = useState<'dark' | 'light' | 'time'>('time'),
    [error, setError] = useState<string>('')

  useEffect(() => {
    if(!navigator.geolocation) return setError(`Can't get your location weather`)

    getPositionWeather().then((_weather: Weather | null) => {
      if(!_weather) return setError(`Can't get your location weather`)

      setWeather(_weather)

      setLoading(false)
      
      // console.log(_weather)
    })

    const interval = setInterval(() => {
      getPositionWeather().then((_weather: Weather | null) => {
        if(!_weather) return setError(`Can't get your location weather`)

        setWeather(_weather)
      })
    }, 1000 * 60 * 60) // One hour

    return () => clearInterval(interval)
  }, [])

  return (
    <main>
      <Head weather={weather} />

      <ThemeProvider theme={
        themeType === 'time' ?
        (timeTheme(weather) === 'Night' ? darkTheme : lightTheme) :
        (themeType === 'dark' ? darkTheme : lightTheme)
      }>
        <CssBaseline />

        <Index
          loading={loading}
          weather={weather}
          error={error}
        />
      </ThemeProvider>
    </main>
  )
}

async function getPositionWeather(): Promise<Weather | null> {
  const [latitude, longitude] = await getPosition()

  const APIURL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude.toString()}&lon=${longitude.toString()}&appid=${APIKEY}`

  const response: Response = await fetch(APIURL)

  if(!response.ok) return null

  return response.json()
}

function getPosition(): Promise<[number, number]> {
  return new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition((position: GeolocationPosition) => {
      const { latitude, longitude } = position.coords

      resolve([latitude, longitude])
    })
  })
}
