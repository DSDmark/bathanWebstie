import { ALERT_MESSAGES, DEBOUNCE_DELAY_VALUE } from '@/constants'
import type { onChangeWithSynthetic } from '@/types'
import { Autocomplete, Box, ListSubheader, MenuItem, Select, TextField } from '@mui/material'
import { useEffect, useState } from 'react'
import { useDebounce } from 'use-debounce'

interface ISelectWithSearchComponentProps {
  ls?: any
  disabled?: boolean
  options: any
  title?: string
  multiple?: boolean
  isLoading?: boolean
  setSearchingState?: any
  searchingState?: string
  translationKey?: string
  onChange?: any
  searchingFunction?: any
  isGroup?: boolean
  limitTags?: number
  label?: string
  [key: string]: any
}

export function SelectWithSearch({
  disabled = false,
  options,
  multiple,
  isLoading = false,
  setSearchingState,
  searchingState,
  searchingFunction,
  onChange,
  isGroup = false,
  limitTags = 2,
  label,
  ...rest
}: ISelectWithSearchComponentProps) {
  const [search, setSearch] = useState('')

  const onLabelChange = (val: string) => {
    if (searchingState) {
      setSearchingState((prev: any) => ({
        ...prev,
        filters: { ...prev.filters, [searchingState]: val },
      }))
    }
  }

  const [searchCoachesList] = useDebounce(search, DEBOUNCE_DELAY_VALUE)
  useEffect(() => {
    if (searchingFunction && setSearchingState && !isLoading) {
      searchingFunction({ search: searchCoachesList })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchCoachesList])
  return (
    <>
      <Autocomplete
        // defaultValue={defaultValue}
        limitTags={limitTags}
        loading={isLoading}
        noOptionsText={ALERT_MESSAGES.dataNoFount}
        onInputChange={(e: onChangeWithSynthetic, val) => {
          if (!e?.currentTarget.textContent) {
            onLabelChange(val)
            setSearch(val)
          }
        }}
        disabled={disabled}
        multiple={Boolean(multiple)}
        options={isLoading ? [] : isGroup ? (options as []).map((e: any) => e.options) : options || []}
        getOptionLabel={(option: any) => {
          return option.name
        }}
        isOptionEqualToValue={(option, value) => option?.id === value?.id}
        renderInput={params => {
          return <TextField label={label} required={rest.required} margin='normal' {...params} />
        }}
        renderOption={(props, option: any) => {
          return isGroup ? (
            <Select defaultValue='' id='grouped-select' name='Grouping'>
              <ListSubheader>{option.name}</ListSubheader>
              <MenuItem value={1}>Option 1</MenuItem>
              <MenuItem value={2}>Option 2</MenuItem>
              <ListSubheader>Category 2</ListSubheader>
              <MenuItem value={3}>Option 3</MenuItem>
              <MenuItem value={4}>Option 4</MenuItem>
            </Select>
          ) : (
            <Box component='li' {...props} key={option.value}>
              {option.name}
            </Box>
          )
        }}
        style={{ width: '100%' }}
        onChange={(_, value) => onChange(value)}
        {...rest}
      />
    </>
  )
}
