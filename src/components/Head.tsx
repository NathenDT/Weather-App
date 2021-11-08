/*
 * Imports
*/

/* Dependencies */
// Functions
import { useEffect, useState } from 'react'

// Components
import { Helmet } from 'react-helmet'

/* Local */
// Functions
import isWeatherValid from '../utils/isWeatherValid'

// Interfaces
import Weather from '../utils/interfaces/Weather'

/*
 * Code
*/

type Props = {
  weather: Weather
}

export default function Head({ weather }: Props): JSX.Element {
  const
    [iconID, setIconID] = useState('01d'),
    [title, setTitle] = useState('Weather App')

  useEffect(() => {
    if(!isWeatherValid(weather)) return

    setIconID(weather.weather[0].icon)

    setTitle(`${weather.name} has ${weather.weather[0].main}`)
  }, [weather])

  return (
    <Helmet>
      <link
        rel="icon"
        href={`https://openweathermap.org/img/wn/${iconID}@2x.png`}
      />

      <title>{title}</title>
    </Helmet>
  )
}
