/*
 * Imports
*/

/* Dependencies */
// Components
import { Typography } from '@mui/material'

/* Local */
// Components
import ItemPaper from '../components/ItemPaper'

/*
 * Code
*/

export default function Footer(): JSX.Element {
  return (
    <footer>
      <ItemPaper>
        <Typography>Created by Nathen dela Torre</Typography>
      </ItemPaper>
    </footer>
  )
}
