/*
 * Imports
*/

/* Dependencies */
// Components
import { Skeleton, Typography } from '@mui/material'

/* Local */
// Types
import Weather from '../../utils/types/Weather'

/*
 * Code
*/

type Props = {
  loading: boolean,
  weather: Weather
}

export default function WeatherCard({ loading, weather }: Props): JSX.Element {
  return (
    <>
      {loading ? <Skeleton
        variant="rectangular"
        width={100}
        height={100}
        style={{ margin: '0 auto' }}
      /> : <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        // alt={weather.weather[0].description}
        width="100"
        height="100"
      />}

      <Typography variant="h4">{loading ? <Skeleton /> : weather.weather[0].main}</Typography>
      
      <Typography>{loading ? <Skeleton /> : `${weather.name} has ${weather.weather[0].description}`}</Typography>
    </>
  )
}
