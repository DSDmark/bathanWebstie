import { AppBar, Grid, useMediaQuery } from '@mui/material/';
import Toolbar from '@mui/material/Toolbar';
import { navData } from "../../data/"
import Searchbar from "./search.components"
import Category from "./category.component.jsx"
import Navicons from "./navicons.component"
import DrawerComponent from "./drawer.component.jsx"

export default function Navebar() {
  const isMoblie = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const { logo, category, icons } = navData;

  const NormalNav = () => (
    <Grid container mt={2}>
      <Grid item>
        <Searchbar />
      </Grid>
      <Grid item>
        <img src={logo.url} alt={logo.alt} />
      </Grid>
      <Grid item>
        <Navicons icons={icons} />
      </Grid>
      <Grid item xs={12}>
        <Category category={category} />
      </Grid>
    </Grid>
  )

  return (
    <AppBar position="static" sx={{ bgcolor: "primary.contrastText", color: "primary.dark" }}>
      <Toolbar>
        {!isMoblie ? <NormalNav /> : <DrawerComponent navData={[logo, category, icons]} />}
      </Toolbar>
    </AppBar>
  );
}

