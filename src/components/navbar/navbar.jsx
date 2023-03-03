import { AppBar, Grid, useMediaQuery } from '@mui/material/';
import Toolbar from '@mui/material/Toolbar';
import { navData } from "../../data/"
import Typography from '@mui/material/Typography';
import Searchbar from "./search.components"
import Category from "./category.component.jsx"
import Navicons from "./navicons.component"
import DrawerComponent from "./drawer.component.jsx"

export default function Navebar() {
  const isMoblie = useMediaQuery((theme) => theme.breakpoints.down("md"));

  return (
    <AppBar position="static" sx={{ bgcolor: "primary.contrastText", color: "primary.dark" }}>
      <Toolbar>
        <Searchbar />
        <Grid container >
          <Grid item>
            <Search />
          </Grid>
          {navData.map(data => {
            const { logo, category, icons } = data;
            return (
              <>
                <Grid item>
                  <img src={logo.url} alt={logo.alt} />
                </Grid>
                <Grid item>
                  <Navicons icons={icons} />
                </Grid>
              </>
            )
          })}
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

