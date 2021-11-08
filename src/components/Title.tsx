/*
 * Imports
*/

/* Dependencies */
// Components
import { Skeleton, Typography } from '@mui/material'

/* Local */
// Components
import ItemPaper from './ItemPaper'

// Interfaces
import Weather from '../utils/interfaces/Weather'

/*
 * Code
*/

type Props = {
  loading: boolean,
  weather: Weather
}

export default function Title({ loading, weather }: Props) {
  return (
    <ItemPaper>
      {loading ? (
        <Skeleton
          variant="rectangular"
          width="100%"
          height={50}
        />
      ) : (
        <Typography variant="h3" component="h1">
          {`${weather.name}, ${weather.sys.country}`}
        </Typography>
      )}
        {/* <Typography variant="h3">
          {`${weather.name}, ${weather.sys.country}`}
        </Typography> */}
    </ItemPaper>
  )
}
