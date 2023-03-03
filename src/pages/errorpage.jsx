import { Grid, Typography, Box, Button, Link as MuiLink } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"

const ErrorPage = () => {
  return (
    <Box>
      <Grid container height="90vh" justifyContent="center" direction="column">
        <Grid item xs={3}>
          <Typography variant="h1">
            404
          </Typography>
        </Grid>
        <Grid item align="center" xs={3}>
          <Typography variant="h5" mb={4}>
            the page you're looking for doesn't exiet.
          </Typography>
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
