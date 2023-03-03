import { Grid, Link as MuiLink } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"

const Category = () => {
  const category = ['NEW', 'SALEBESTSELLER', 'SSUIT', 'DRESSES', 'LEHENGA', 'SAREES', 'LOUNGEWEAR', 'FOOTWEAR', 'BAGS', 'JEWELLERY', 'FURNISHING']

  return (
    <Grid container mb={2} justifyContent="center" columnSpacing={2}>
      {category.map(item => (
        <Grid item key={window.crypto.randomUUID()}>
          <MuiLink underline="none" to={`/products/${item.toLowerCase()}`} component={RouterLink}>
            {item}
          </MuiLink>
        </Grid>
      ))}
    </Grid>
  )
}

export default Category;
