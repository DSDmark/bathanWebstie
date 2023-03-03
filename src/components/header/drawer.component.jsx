import React, { useState } from 'react';
import { Grid, Drawer, Box } from '@mui/material/';
import { IconButton, Typography } from '@mui/material/'
import { MenuOpen } from "@mui/icons-material"
import Searchbar from "./search.components"
import Category from "./category.component.jsx"
import Navicons from "./navicons.component"
import { Link } from "react-router-dom"

const DrawerComponent = ({ navData }) => {
  const [logo, category, icons] = navData;
  const [toggle, setToggle] = useState(false);

  const hendleToggle = () => {
    setToggle((prev) => !prev);
  }

  return (
    <Box>
      <Grid container m={2}>
        <Grid item>
          <img src={logo.url} alt={logo.alt} />
        </Grid >
        <Grid item >
          <IconButton onClick={hendleToggle}>
            <MenuOpen />
          </IconButton>
        </Grid >
      </Grid >
      <Drawer open={toggle}>
        <Searchbar />
      </Drawer>
    </Box>
  )
}

export default DrawerComponent
