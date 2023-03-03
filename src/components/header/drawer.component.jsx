import React, { useState } from 'react';
import { Grid, Drawer, Box, Link as MuiLink, IconButton } from '@mui/material/';
import { OpenWithRounded, CloseRounded } from "@mui/icons-material"
import Searchbar from "./search.components"
import Category from "./category.component.jsx"
import Navicons from "./navicons.component"
import { Link as RouterLink } from "react-router-dom"

const DrawerComponent = ({ navData }) => {
  const [logo, category, icons] = navData;
  const [toggle, setToggle] = useState(false);

  const hendleToggle = () => {
    setToggle((prev) => !prev);
  }

  return (
    <Box width="100%" m={2}>
      <Grid container >
        <Grid item>
          <MuiLink to={'/'} component={RouterLink} >
            <img src={logo.url} alt={logo.alt} />
          </MuiLink>
        </Grid>
        <Grid item ml="auto">
          <IconButton onClick={hendleToggle}>
            <OpenWithRounded />
          </IconButton>
        </Grid>
      </Grid >
      <Drawer open={toggle}>
        <Grid container rowGap={4} >
          <Grid item xs={12}>
            <IconButton p={2} onClick={hendleToggle}>
              <CloseRounded />
            </IconButton>
            <Searchbar />
          </Grid>
          <Grid item xs={12}>
            <Navicons icons={icons} />
          </Grid>
          <Grid item xs={12}>
            <Category category={category} />
          </Grid>
        </Grid>
      </Drawer>
    </Box >
  )
}

export default DrawerComponent
