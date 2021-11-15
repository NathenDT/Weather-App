/*
 * Imports
*/

/* Dependencies */
// Components
import { Typography } from '@mui/material'

/* Locals */
// Components
import Card from '../Card'

/*
 * Code
*/

type Props = {
  currentDate: Date
}

export default function DateCard({ currentDate }: Props): JSX.Element {
  return (
    <Card>
      <Typography variant="h5">Date</Typography>

      <Typography variant="h6">{currentDate.toDateString()}</Typography>
      
      <Typography variant="h6">{currentDate.toLocaleTimeString()}</Typography>
    </Card>
  )
}
