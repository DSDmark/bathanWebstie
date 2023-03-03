import { Grid, Typography } from "@mui/material"

const Category = () => {
  const category = ['NEW', 'SALEBEST SELLER', 'SSUIT', 'DRESSES', 'LEHENGA', 'SAREES', 'LOUNGEWEAR', 'FOOTWEAR', 'BAGS', 'JEWELLERY', 'FURNISHING']

  return (
    <Grid container justifyContent="center" columnSpacing={2}>
      {category.map(e => (
        <Grid item key={window.crypto.randomUUID()}>
          <Typography variant="title">
            {e}
          </Typography>
        </Grid>
      ))}
    </Grid>

  )
}

export default Category;
