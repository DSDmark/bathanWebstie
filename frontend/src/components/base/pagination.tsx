import { DEBOUNCE_DELAY_VALUE, PAGE_PER_ENTRY } from '@/constants'
import { FormControl, InputLabel, MenuItem, Pagination, Select, Stack, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDebouncedCallback } from 'use-debounce'

interface PaginationProps {
  totalCount: number | undefined
  page: number
  perPage: number | undefined
  onChange: (event: React.ChangeEvent<unknown>, value: number) => void
  onItemsPerPageChange?: (perPageItm: number) => void
}

function PaginationLayout({
  totalCount = 0,
  page,
  perPage,
  onChange,
  onItemsPerPageChange = () => {},
}: PaginationProps) {
  //   const { pagePerItm } = useAppSelector(({ ui }) => ui)
  //   const dispatch = useAppDispatch()
  const [pageInput, setPageInput] = useState<number | string>(page + 1)

  //   useEffect(() => {
  //     if (perPage) {
  //       dispatch(setPagePerItm(perPage))
  //     }
  //   }, [dispatch, perPage])

  const debounced = useDebouncedCallback(value => {
    const newPage = parseInt(value)
    onChange(event as unknown as React.ChangeEvent<unknown>, newPage)
  }, DEBOUNCE_DELAY_VALUE)

  const handlePageInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    if (/^\d+$/.test(value) && +value > 0 && +value <= Math.ceil(totalCount / (perPage ?? 1))) {
      setPageInput(value)
      debounced(value)
    } else if (value === '') {
      setPageInput('')
    }
  }

  useEffect(() => {
    setPageInput(page + 1)
  }, [page])

  return (
    <Stack spacing={1} mt={1} direction='row' alignItems='center'>
      {Boolean(totalCount) && (
        <>
          <FormControl size='small'>
            <InputLabel id='demo-simple-select-label'>Per Page</InputLabel>
            <Select
              labelId='demo-simple-select-label'
              label='Per Page'
              size='small'
              sx={{ width: 80, height: 32 }}
              value={perPage}
              onChange={(e: any) => {
                setPageInput(1)
                onItemsPerPageChange(e.target.value)
              }}
            >
              {PAGE_PER_ENTRY.map((option: any) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl size='small'>
            <TextField
              size='small'
              sx={{ width: 80, '& .MuiInputBase-root': { height: '32px' } }}
              value={pageInput}
              onChange={handlePageInputChange}
              label='Page No'
              inputProps={{
                inputMode: 'numeric',
                pattern: '[0-9]*',
              }}
            />
          </FormControl>
        </>
      )}
      <Pagination
        sx={{ flex: 2 }}
        count={Math.ceil(totalCount / (perPage ?? 1))}
        variant='outlined'
        shape='rounded'
        page={page + 1}
        onChange={onChange}
      />
    </Stack>
  )
}

export default PaginationLayout
