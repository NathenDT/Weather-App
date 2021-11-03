import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'

import Weather from '../utils/interfaces/Weather'

type Props = {
  weather: Weather
}

export default function Head({ weather }: Props): JSX.Element {
  const
    [iconID, setIconID] = useState('01d'),
    [title, setTitle] = useState('Weather App')

  useEffect(() => {
    if(weather.name === '') return

    setIconID(weather.weather[0].icon)

    setTitle(weather.name + ' Weather')
  }, [weather])

  return (
    <Helmet>
      <link
        rel = 'icon'
        href = { `https://openweathermap.org/img/wn/${iconID}@2x.png` }
      />

      <title>{ title }</title>
    </Helmet>
  )
}