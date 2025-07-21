export type SuccessResult<T> = {
  status?: number
  message?: string
  data: T
}

export type ErrorResult = {
  status: number
  data?: any
  message: string | null
}

export type GetListWithPagination<T> = {
  count: number
  next?: string
  previous?: string
  results: T
  total_unread_messages_count?: number
}
