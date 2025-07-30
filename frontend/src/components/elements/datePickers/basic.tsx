import { MAIN_DATE_FORMAT } from '@/constants'
import { formatDateUtil } from '@/utils'
import { SxProps } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'
import moment from 'moment'
import React from 'react'

interface CustomDatePickerProps {
  label: string
  value?: any
  onChange: (value: any) => void
  disablePast?: boolean
  format?: string
  sx?: SxProps
  required?: boolean
  name?: string
}

export const DatePickerInput: React.FC<CustomDatePickerProps> = ({
  label,
  value,
  onChange,
  disablePast = true,
  format = MAIN_DATE_FORMAT,
  sx,
  name,
  ...rest
}) => {
  return (
    <DatePicker
      label={label}
      sx={sx}
      disablePast={disablePast}
      format={format}
      value={moment(value)}
      onChange={val => onChange(formatDateUtil(val, 'date'))}
      name={name}
      {...rest}
    />
  )
}
