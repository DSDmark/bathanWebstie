export const ROLES = Object.freeze({
  manager: "manager",
  engineer: "engineer",
})

export const ALERT_MESSAGES = Object.freeze({
  // not found
  dataNoFount: "Data not found",
  searchNotFount: "Sorry, there are no matches. Try a new search?",
  // generic
  submittingLoading: "Please wait...",
  submittingSuccessMassage: "Detail Updated Successfully",
  allFieldsRequired: "Please fill all required fields",
  NA: "N/A",
  // error
  fallbackError: "Something went wrong, Please try again later!",
  networkError: "Please check your internet connection!",
  timeOutError: "Your connection taking too long to get data!",
})

export const SERVER_ERRORS = {
  dateNotFound: "Date not found!",
  internalServer: "Server is too busy to process others!",
  inValidDetails: "Provided details is not valid!",
  permissionDenied: "You don't have permission!",
  invalidToken: "Your session is expired, please login!",
}
