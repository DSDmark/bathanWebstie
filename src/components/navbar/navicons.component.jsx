import personoutlineoutlinedicon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import { IconButton,Grid } from "@mui/material"
import {Link} from "react-router-dom"

const Navicons = ({icons}) => {
  return (
    <>
     <Grid contanier>
        {icons.map((items)=>(
        <Grid item key={window.crypto.randomUUID()}>
         <Link to>
            {items}
         </Link>
        </Grid>
        ))}
     </Grid>
    </>
  )
}

export default Navicons
