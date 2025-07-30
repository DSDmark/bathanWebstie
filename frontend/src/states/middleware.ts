import { ALERT_MESSAGES, RTK_ERROR_CODES, SERVER_STATUS_CODE } from '@/constants'
import { Middleware, isRejectedWithValue } from '@reduxjs/toolkit'
import toast from 'react-hot-toast'

interface IErrorResponse {
  code: number
  message: string
}

const formatErrorMessage = (err: IErrorResponse | IErrorResponse['message'] | any): string => {
  console.log(err.data, 'here')
  // redux custom error
  if (err?.data?.status === SERVER_STATUS_CODE.forbidden && typeof err?.data?.message === 'string') {
    return err?.data?.message
  }

  if (typeof err?.error === 'string' && err.status === RTK_ERROR_CODES.parsingError) {
    return ALERT_MESSAGES.fallbackError
  }

  if (typeof err?.error === 'string' && err.status === RTK_ERROR_CODES.timeOutError) {
    return ALERT_MESSAGES.timeOutError
  }

  if (err?.data?.status === SERVER_STATUS_CODE.badRequest && typeof err?.data?.message === 'string') {
    return err?.data?.message
  }

  if (err?.data?.status === SERVER_STATUS_CODE.authenticationDenied && typeof err?.data?.message === 'string') {
    return err?.data?.message
  }

  // default error
  if (typeof err.data.message === 'string') {
    return err.data.message
  }

  return ALERT_MESSAGES.fallbackError
}

export const rtkQueryErrorLogger: Middleware = () => next => (action: any) => {
  if (isRejectedWithValue(action)) {
    if (formatErrorMessage(action?.payload as IErrorResponse | IErrorResponse['message'])) {
      toast.error(formatErrorMessage(action?.payload as IErrorResponse | IErrorResponse['message']))
    }
  }

  return next(action)
}
