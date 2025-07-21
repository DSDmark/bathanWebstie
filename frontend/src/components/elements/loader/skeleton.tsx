import { Skeleton, Stack, type SxProps } from "@mui/material"
import React from "react"

interface SkeletonLoaderProps {
  numberOfRows: number
  rowHeight?: number | string
  sx?: SxProps
}

const SkeletonLoader = ({ numberOfRows, rowHeight = 30, sx, ...rest }: SkeletonLoaderProps) => {
  return (
    <Stack spacing={1}>
      {Array.from(Array(numberOfRows)).map((_, index) => (
        <Skeleton
          key={index}
          variant="rounded"
          animation="wave"
          sx={{
            borderRadius: 1,
            ...sx,
          }}
          height={rowHeight}
          {...rest}
        />
      ))}
    </Stack>
  )
}

export default SkeletonLoader
