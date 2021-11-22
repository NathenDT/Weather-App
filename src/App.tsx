/*
 * Imports
*/

/* Dependencies */
// Functions
import { useEffect, useState } from 'react'
import Cookies from 'universal-cookie'

// Components
import { Alert } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'

// Styles
import { CssBaseline } from '@mui/material'
import { createTheme, Theme } from '@mui/material/styles'

/* Local */
// Functions
import getCardList from './utils/getCardList'

// Components
import Footer from './components/Footer'
import Head from './components/Head'
import Main from './components/Main'
import More from './components/more/Index'
import Title from './components/Title'
import ToggleCookies from './components/ToggleCookies'

// Styles
import './styles/App.scss'

// Jsons
import constants from './constants.json'

// Types
import CardList from './utils/types/CardList'
import CardNames from './utils/types/CardNames'
import ThemeTypes from './utils/types/ThemeTypes'
import Units from './utils/types/Units'
import Weather from './utils/types/Weather'

/*
 * Code
*/

const APIKEY = constants.api_key

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
    [cardsLeft, setCardsLeft] = useState<CardNames[]>(['weather', 'sun', 'cloud', 'humidity']),
    [cardsRight, setCardsRight] = useState<CardNames[]>(['temperature', 'date', 'wind', 'visibility', 'pressure']),
    [currentDate, setCurrentDate] = useState<Date>(new Date()),
    [error, setError] = useState<string>(''),
    [loading, setLoading] = useState<boolean>(true),
    [themeType, setThemeType] = useState<ThemeTypes>('time'),
    [unitType, setUnitType] = useState<Units>('metric'),
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
    })

  const cardsList: CardList[] = getCardList(loading, weather, currentDate, unitType)

  useEffect(() => { // On load
    if(!navigator.geolocation) return setError(`Can't get your location weather`) // When the browser doesn't support geolocation
    
    getCookies(setCardsLeft, setCardsRight, setThemeType)

    getPositionWeather().then((_weather: Weather | null) => { // Get the weather from the current position
      if(!_weather) return setError(`Can't get your location weather`)

      setWeather(_weather)

      setLoading(false)

      const countryCode: string = _weather.sys.country.toUpperCase()

      if(countryCode === 'US' || countryCode === 'MM' || countryCode === 'LR') setUnitType('imperial')
    })

    const weatherInterval = setInterval(() => { // Update the weather hourly
      getPositionWeather().then((_weather: Weather | null) => {
        if(!_weather) return setError(`Can't get your location weather`)

        setWeather(_weather)
      })
    }, 1000 * 60 * 60) // One Hour

    const dateInterval = setInterval(() => { // Update the date
      setCurrentDate(new Date())
    }, 100) // One Hundred Milliseconds

    return () => { // On unload
      clearInterval(weatherInterval)
      clearInterval(dateInterval)
    }
  }, [])

  return (
    <>
      <Head
        loading={loading}
        weather={weather}
      />

      <ThemeProvider theme={
        themeType === 'time' ?
        (timeTheme(weather, currentDate) === 'Night' ? darkTheme : lightTheme) :
        (themeType === 'dark' ? darkTheme : lightTheme)
      }>
        <CssBaseline />

        <ToggleCookies />

        {Boolean(error) && <Alert
          severity="error"
          style={{ margin: '0.25em' }}
        >
          {error}
        </Alert>}

        <Title
          loading={loading}
          weather={weather}
        />

        <Main
          cardsLeft={cardsLeft}
          cardsList={cardsList}
          cardsRight={cardsRight}
          setCardsLeft={setCardsLeft}
          setCardsRight={setCardsRight}
        />

        <Footer />

        <More
          cardLeft={cardsLeft}
          cardRight={cardsRight}
          themeType={themeType}
          unitType={unitType}
          setCards={setCardsLeft}
          setThemeType={setThemeType}
          setUnitType={setUnitType}
        />
      </ThemeProvider>
    </>
  )
}

async function getPositionWeather(): Promise<Weather | null> { // Get the weather from the current position
  const [latitude, longitude] = await getPosition()

  const APIURL: string = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude.toString()}&lon=${longitude.toString()}&appid=${APIKEY}`

  const response: Response = await fetch(APIURL)

  if(!response.ok) return null

  return response.json()
}

function getCookies( // Gets cookies and updates the states
  setCardsLeft: (cardsLeft: CardNames[]) => void,
  setCardsRight: (cardsRight: CardNames[]) => void,
  setThemeType: (themeType: ThemeTypes) => void
) {
  const cookies = new Cookies()
  
  const cardNames: string[] = ['cloud', 'date', 'humidity', 'pressure', 'sun', 'temperature', 'visibility', 'weather', 'wind']
  const themeTypes: string[] = ['dark', 'light', 'time']

  const cardsLeft = cookies.get('cardsLeft')
  const cardsRight = cookies.get('cardsRight')
  const themeType = cookies.get('themeType')

  if(cardsLeft) setCardsLeft(cardsLeft.split('|').filter((name: string) => {
    return cardNames.includes(name)
  }))

  if(cardsRight) setCardsRight(cardsRight.split('|').filter((name: string) => {
    return cardNames.includes(name)
  }))

  if(themeTypes.includes(themeType)) setThemeType(themeType)
}

function getPosition(): Promise<[number, number]> { // Get the current position
  return new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition((position: GeolocationPosition) => {
      const { latitude, longitude } = position.coords

      resolve([latitude, longitude])
    })
  })
}

function timeTheme(weather: Weather, currentDate: Date): 'Day' | 'Night' { // Get the current time theme
  const sunrise = new Date(weather.sys.sunrise * 1000)
  const sunset = new Date(weather.sys.sunset * 1000)

  if (currentDate.getTime() > sunrise.getTime() && currentDate.getTime() < sunset.getTime()) return 'Day'
  
  return 'Night'
}
