import { ALERT_MESSAGES } from '@/constants'
import { ButtonProps, Button as MuiBtn } from '@mui/material'
import React from 'react'

interface ICostumeButton extends ButtonProps {
  icon?: React.ReactNode
  className?: string
  children?: React.ReactNode
  disabled?: boolean
  btnTitle?: string
  isLoading?: boolean
}

export function BaseBtn({ isLoading = false, btnTitle, className, disabled = false, ...rest }: ICostumeButton) {
  return (
    <>
      <MuiBtn disabled={disabled} className={`btn ${className}`} {...rest} fullWidth>
        {isLoading ? ALERT_MESSAGES.submittingLoading : btnTitle ? btnTitle : ALERT_MESSAGES.btnTitle}
      </MuiBtn>
    </>
  )
}
