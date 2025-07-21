export const ROLES = Object.freeze({
  manager: "Manager",
  engineer: "Engineer",
});

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
});

export const REGEX = Object.freeze({
  email: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
  mobile: /^[6-9]\d{9}$/,
  website: /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(\/.*)?$/,
  password: /^(?=.*[A-Z])(?=.*\d)(?=.*[@!$%^&*() +[\]{};':"\\|,.<>/?#]).*$/,
});

export const COMMON_VALIDATION_MASSAGE = Object.freeze({
  // Requires
  password: "password is required!",
  email: "Email is required!",
  gender: "gender is required!",
  projectType: "project type is required!",
  name: "name is required!",
  surname: "surname is required!",
  date: "date is required!",
  description: "description is Required!",

  // length
  maxVal: "too long!",
  minVal: "too short!",

  // validation
  emailValidation: "email is not valid!",
  urlValidation: "url must be a valid!",
});
