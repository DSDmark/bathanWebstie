import React from "react"
import { Box, Container, styled } from "@mui/material"

const OfferNote = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: theme.palette.primary.light,
  padding: theme.spacing(1),
  color: theme.palette.primary.contrastText,
}))

const Note = () => {
  return (
    <>
      <OfferNote>
        HOli sall - flat 35% off
      </OfferNote>
    </>
  )
}
export default Note;

