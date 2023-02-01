/*
 * Imports
 */

/* Dependencies */
// Components
import { Button, Typography } from "@mui/material"

/* Local */
// Components
import ItemPaper from "../components/ItemPaper"

/*
 * Code
 */

export default function Footer(): JSX.Element {
  return (
    <footer>
      <ItemPaper>
        <Button
          variant='contained'
          color='secondary'
          onClick={() =>
            window.open(
              "https://github.com/NathenDT/Weather-App",
              "_blank",
              "noreferrer"
            )
          }
        >
          See the code
        </Button>
      </ItemPaper>
    </footer>
  )
}
