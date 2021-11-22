/*
 * Imports
*/

/* Dependencies */
// Components
import { Helmet } from 'react-helmet'

/* Local */
// Types
import Weather from '../utils/types/Weather'

/*
 * Code
*/

type Props = {
  loading: boolean,
  weather: Weather
}

export default function Head({ loading, weather }: Props): JSX.Element {
  return (
    <Helmet>
      <link
        rel="icon"
        href={loading ? 'http://openweathermap.org/img/wn/01d@2x.png' : `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
      />

      <title>{loading ? 'Weather App' : `${weather.name} has ${weather.weather[0].main}`}</title>
    </Helmet>
  )
}
