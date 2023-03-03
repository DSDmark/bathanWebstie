import React from 'react';
import { styled } from '@mui/material/styles';
import { Avatar, Box, IconButton, Typography, Grid } from '@mui/material';
import { PlayArrow } from '@mui/icons-material';

const ReelPreview = styled(Avatar)(({ theme }) => ({
  margin: theme.spacing(2),
  height: "6rem",
  width: "6rem",
}))

const Reel = () => {
  const [isPlaying, setIsPlaying] = React.useState(false);

  const data = [
    {
      src: "https://www.w3schools.com/html/mov_bbb.mp4",
      alt: "Reel 1",
      avatarSrc: "https://i.pravatar.cc/150?img=1",
      avataralt: "avatar 1",
    },
    {
      src: "https://www.w3schools.com/html/mov_bbb.mp4",
      alt: "Reel 1",
      avatarSrc: "https://i.pravatar.cc/150?img=1",
      avataralt: "avatar 1",
    },
    {
      src: "https://www.w3schools.com/html/mov_bbb.mp4",
      alt: "Reel 1",
      avatarSrc: "https://i.pravatar.cc/150?img=1",
      avataralt: "avatar 1",
    },
  ]

  return (
    <Box sx={{ background: "url(https://cdn.shopify.com/s/files/1/2542/7564/files/reels-bg.png)" }}>
      <Grid container >
        <Grid item >
          <ReelPreview src="https://cdn.shopify.com/s/files/1/2542/7564/products/22_34379c6c-46bf-48a3-8e69-7c18f01f34ce_1800x1800.jpg?v=1673331150" />
        </Grid >
        <Grid item >
          <ReelPreview src="https://cdn.shopify.com/s/files/1/2542/7564/products/22_34379c6c-46bf-48a3-8e69-7c18f01f34ce_1800x1800.jpg?v=1673331150" />
        </Grid >
        <Grid item >
          <ReelPreview src="https://cdn.shopify.com/s/files/1/2542/7564/products/22_34379c6c-46bf-48a3-8e69-7c18f01f34ce_1800x1800.jpg?v=1673331150" />
        </Grid >
        <Grid item >
          <ReelPreview src="https://cdn.shopify.com/s/files/1/2542/7564/products/22_34379c6c-46bf-48a3-8e69-7c18f01f34ce_1800x1800.jpg?v=1673331150" />
        </Grid >
        <Grid item >
          <ReelPreview src="https://cdn.shopify.com/s/files/1/2542/7564/products/22_34379c6c-46bf-48a3-8e69-7c18f01f34ce_1800x1800.jpg?v=1673331150" />
        </Grid >
        <Grid item >
          <ReelPreview src="https://cdn.shopify.com/s/files/1/2542/7564/products/22_34379c6c-46bf-48a3-8e69-7c18f01f34ce_1800x1800.jpg?v=1673331150" />
        </Grid >
      </Grid>
    </Box>
  )
};

export default Reel
