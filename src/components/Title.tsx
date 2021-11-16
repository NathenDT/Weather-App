/*
 * Imports
*/

/* Dependencies */
// Components
import { Skeleton, Typography } from '@mui/material'

/* Local */
// Components
import ItemPaper from './ItemPaper'

// Types
import Weather from '../utils/types/Weather'

/*
 * Code
*/

type Props = {
  loading: boolean,
  weather: Weather
}

export default function Title({ loading, weather }: Props): JSX.Element {
  return (
    <ItemPaper>
      <Typography variant="h3" component="h1">
        {loading ? <Skeleton /> : `${weather.name}, ${weather.sys.country}`}
      </Typography>
    </ItemPaper>
  )
}
