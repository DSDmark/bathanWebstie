import { Grid, Typography, Box, Button, Link as MuiLink } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"

const ErrorPage = () => {
  return (
    <Box>
      <Grid container height="90vh" justifyContent="center" alignItems="center">
        <Grid item>
          <Typography variant="h1">
            404
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h5">
            the page you're looking for doesn't exiet.
          </Typography>
        </Grid>
        <Grid item>
          <MuiLink underline="none" to="/home" component={RouterLink} variant="title">
            <Button variant="contained">
              Back Home
            </Button>
          </MuiLink>
        </Grid>
      </Grid>
    </Box>
  )
}
export default ErrorPage;
