import { useEffect, useState } from 'react'

import Head from './components/Head'

import Index from './pages'

import Position from './utils/interfaces/Position'
import Weather from './utils/interfaces/Weather'

const APIKEY = 'b5220e56efb144f47112992e18a84270'

const city = 'honolulu'

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

    (async function() {
      const [latitude, longitude] = await getPostion()

      console.log(`api.openweathermap.org/data/2.5/weather?lat=${latitude.toString()}&lon=${longitude.toString()}&appid=${APIKEY}`)

      const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=21.347258938445016&lon=-157.89905721327702&appid=${APIKEY}`)

      if(!response.ok) return

      // const json = await response.json()

      // console.log(json)
    })()
  }, [])

  return (
    <>
      <Head weather = { weather } />

      <Index />
    </>
  )
}

function getPostion(): Promise<[number, number]> {
  return new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition((position: GeolocationPosition) => {
      const { latitude, longitude } = position.coords

      resolve([latitude, longitude])
    })
  })
}
