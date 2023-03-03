import { Grid, Drawer } from '@mui/material/';
import Typography from '@mui/material/Typography';
import Searchbar from "./search.components"
import Category from "./category.component.jsx"
import Navicons from "./navicons.component"
import { Link } from "react-router-dom"

const DrawerComponent = ({ logo }) => {

  return (
    <Box>
      <Typography variant="title" >
        {logo}
      </Typography>
      <Drawer >
        <Grid container>
          <Grid item>
            <Searchbar />
          </Grid>
          <Grid item>
            <Navicons />
          </Grid>
          <Grid item xs={12} mb={2} mt={2}>
            <Category />
          </Grid>
        </Grid >
      </Drawer>
    </Box>
  )
}
export default DrawerComponent
