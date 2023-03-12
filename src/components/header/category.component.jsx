import React, { useState } from "react"
import { Link as MuiLink, useMediaQuery, Grid, ListItemText, ListItem, ListItemButton } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"

const Category = ({ category }) => {
  const [activeLink, setLink] = useState("NEW")
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const gap = isMobile ? "2rem" : "1rem";
  const style = {
    justifyContent: "center",
    marginTop: "2rem",
    marginBottom: "1rem",
    flexDirection: !isMobile ? "row" : "column",
    gap: gap,
  }

  return (
    <Grid container style={style}>
      {category.map(item => (
        <Grid item key={window.crypto.randomUUID()}>
          <ListItem disablePadding>
            <ListItemButton onClick={() => setLink(item)} selected={activeLink === item}>
              <ListItemText align="center">
                <MuiLink underline="none" to={`/products/${item.toLowerCase()}`} component={RouterLink}>
                  {item}
                </MuiLink>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        </Grid>
      ))}
    </Grid>
  )
}


export default Category;
