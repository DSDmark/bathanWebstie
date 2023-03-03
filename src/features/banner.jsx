import banner from "../assets/banner.png"
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, Grid } from '@mui/material'

function Banner(props) {
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!"
    },
    {
      name: "Random Name #2",
      description: "Hello World!"
    }
  ]
  return (
    <Carousel fullHeightHover={false}  >
      <Paper>
        <img src={banner} />
      </Paper>
      <Paper>
        <img src={banner} />
      </Paper>
    </Carousel>
  )
}

export default Banner
