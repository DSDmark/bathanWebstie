export const SERVER_URL_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_BASE_URL
export const BASE_URL_WITH_POSTFIX = `${SERVER_URL_BASE_URL}/api/v1`
export const DEV = process.env.NODE_ENV === 'development'
