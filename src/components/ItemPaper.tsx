/*
 * Imports
*/

/* Dependencies */
// Functions
import { styled } from '@mui/system'
// Components
import { Paper } from '@mui/material'

/*
 * Code
*/

const ItemPaper = styled(Paper)(({ theme }) => ({
  padding: '1rem',
  margin: '0.25rem',
  textAlign: 'center',
  backgroundColor: theme.palette.primary.main,
  opacity: '0.75'
}))

export default ItemPaper
