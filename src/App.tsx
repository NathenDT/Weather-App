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
import Weather from './utils/interfaces/Weather'

/*
 * Code
*/

export default function App(): JSX.Element {
  const
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

  useEffect(() => {
    if(!navigator.geolocation) return

    getWeather().then((_weather: Weather | null) => {
      if(!_weather) return

      setWeather(_weather)
    })
  }, [])

  return (
    <>
      <Head weather = {weather} />

      <Index weather = {weather} />
    </>
  )
}

async function getWeather(): Promise<Weather | null> {
  const APIKEY = 'b5220e56efb144f47112992e18a84270'

  const [latitude, longitude] = await getPostion()

  const APIURL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude.toString()}&lon=${longitude.toString()}&appid=${APIKEY}`

  const response: Response = await fetch(APIURL)

  if(!response.ok) return null

  return response.json()
}

function getPostion(): Promise<[number, number]> {
  return new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition((position: GeolocationPosition) => {
      const { latitude, longitude } = position.coords

      resolve([latitude, longitude])
    })
  })
}
