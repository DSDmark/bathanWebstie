export const SERVER_STATUS_CODE = Object.freeze({
  notFound: 404,
  badRequest: 400,
  forbidden: 403,
  authenticationDenied: 401,
  serverError: 500,
  success: 200,
});

export const STORAGE_VALUES = Object.freeze({
  mainAuthToken: "token",
});

export const RTK_ERROR_CODES = Object.freeze({
  fetchError: "FETCH_ERROR",
  parsingError: "PARSING_ERROR",
  timeOutError: "TIMEOUT_ERROR",
  customError: "CUSTOM_ERROR",
});
