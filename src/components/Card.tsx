/*
 * Imports
*/

/* Dependencies */
// Functions
import { styled } from '@mui/system'

// Components
import { Grid, Paper } from '@mui/material'

/* Locals */
// Components
import ItemPaper from './ItemPaper'

/*
 * Code
*/

type Props = {
  children: any
}

export default function Card({ children }: Props): JSX.Element {
  return (
    <ItemPaper>
      {children}
    </ItemPaper>
  )
}
