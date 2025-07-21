import { Box, CircularProgress, Fade, SxProps } from "@mui/material"
import React from "react"

interface IProps {
  loading: boolean
  sx?: SxProps
}

function Loader({ loading = true, sx }: IProps) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "75vh",
        ...sx,
      }}
    >
      <Fade
        in={loading}
        style={{
          transitionDelay: loading ? "200ms" : "0ms",
        }}
        unmountOnExit
      >
        <CircularProgress />
      </Fade>
    </Box>
  )
}

export default Loader
