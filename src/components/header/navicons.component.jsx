import PersonOutlineOutlined from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlined from '@mui/icons-material/FavoriteBorderOutlined';
import LocalGroceryStoreOutlined from '@mui/icons-material/LocalGroceryStoreOutlined';
import LocalShippingOutlined from '@mui/icons-material/LocalShippingOutlined';
import { IconButton, Grid } from "@mui/material"
import { Link } from "react-router-dom"

const Navicons = ({ icons }) => {
  const components = {
    PersonOutlineOutlined, FavoriteBorderOutlined, LocalGroceryStoreOutlined,
    LocalShippingOutlined
  }

  return (
    <>
      <Grid container >
        {icons.map(iconData => {
          const { value, rout } = iconData;
          const Icon = components[value]
          return (
            <Grid key={window.crypto.randomUUID()}>
              <Link to={rout}>
                <IconButton>
                  <Icon />
                </IconButton>
              </Link>
            </Grid>
          )
        })}
      </Grid>
    </>
  )
}

export default Navicons
