/*
 * Imports
*/

/* Dependencies */
// Components
import { Typography } from '@mui/material'

/*
 * Code
*/

type Props = {
  currentDate: Date
}

export default function DateCard({ currentDate }: Props): JSX.Element {
  return (
    <>
      <Typography variant="h5">Date</Typography>

      <Typography variant="h6">{currentDate.toDateString()}</Typography>
      
      <Typography variant="h6">{currentDate.toLocaleTimeString()}</Typography>
    </>
  )
}
