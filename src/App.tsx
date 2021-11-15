require('dotenv').config()

/*
 * Imports
*/

/* Dependencies */
// Functions
import { useEffect, useState } from 'react'
import { HTML5Backend } from 'react-dnd-html5-backend'

// Components
import { ThemeProvider } from '@mui/material/styles'
import { DndProvider } from 'react-dnd'

// Styles
import { CssBaseline } from '@mui/material'
import { createTheme, Theme } from '@mui/material/styles'

/* Local */
// Function
import timeTheme from './utils/timeTheme'

// Components
import Head from './components/Head'
import Index from './pages/index'

// Styles
import './styles/App.scss'

// Interfaces
import Weather from './utils/interfaces/Weather'

// Types
import TemperatureUnit from './utils/types/TemperatureUnits'
import ThemeTypes from './utils/types/ThemeTypes'

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
      primary: '#000000'
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
    [currentDate, setCurrentDate] = useState<Date>(new Date()),
    [tempType, setTempType] = useState<TemperatureUnit>('F'),
    [themeType, setThemeType] = useState<ThemeTypes>('dark'),
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
    }, 1000 * 60 * 60) // One Hour

    const intervalDate = setInterval(() => {
      setCurrentDate(new Date())
    }, 100) // One Hundred Milliseconds

    return () => {
      clearInterval(interval)

      clearInterval(intervalDate)
    }
  }, [])

  return (
    <>
      <Head weather={weather} />

      <ThemeProvider theme={
        themeType === 'time' ?
        (timeTheme(weather, currentDate) === 'Night' ? darkTheme : lightTheme) :
        (themeType === 'dark' ? darkTheme : lightTheme)
      }>
        <DndProvider backend={HTML5Backend}>
          <CssBaseline />

          <Index
            loading={loading}
            weather={weather}
            themeType={themeType}
            tempType={tempType}
            currentDate={currentDate}
            error={error}
            setThemeType={setThemeType}
            setTempType={setTempType}
          />
        </DndProvider>
      </ThemeProvider>
    </>
  )
}

async function getPositionWeather(): Promise<Weather | null> {
  const [latitude, longitude] = await getPosition()

  const APIURL: string = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude.toString()}&lon=${longitude.toString()}&appid=${APIKEY}`

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
