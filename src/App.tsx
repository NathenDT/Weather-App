/*
 * Imports
*/

/* Dependency */
// Functions
import { useEffect, useState } from 'react'

// Components
import Head from './components/Head'

/* Local */
// Components
import Index from './pages'

// Interfaces
import City from './utils/interfaces/City'
import Weather from './utils/interfaces/Weather'

// Styles
import './styles/App.scss'

/*
 * Code
*/

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
    [error, setError] = useState<string>('')

  useEffect(() => {
    if(!navigator.geolocation) return setError(`Can't get your location weather`)

    getPositionWeather().then((_weather: Weather | null) => {
      if(!_weather) return setError(`Can't get your location weather`)

      setWeather(_weather)

      setLoading(false)
    })
  }, [])

  return (
    <>
      <Head weather={weather} />

      <Index
        loading={loading}
        weather={weather}
        error={error}
      />
    </>
  )
}

async function getPositionWeather(): Promise<Weather | null> {
  const APIKEY = 'b5220e56efb144f47112992e18a84270'

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
