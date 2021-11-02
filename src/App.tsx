import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'

import Head from './components/Head'

import Weather from './utils/interfaces/Weather'

const APPID = 'b5220e56efb144f47112992e18a84270'

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
    (async function() {
      let city = 'honolulu'

      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APPID}`)

      if(!response.ok) return

      const data = await response.json()

      setWeather(data)
    })()
  }, [])

  return (
    <>
      <Head
        weather = { weather }
      />

      <h1>Hello, World</h1>
      <p>This is the content of the page</p>
    </>
  )
}
