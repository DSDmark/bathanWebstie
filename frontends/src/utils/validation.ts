import {
  COMMON_VALIDATION_MASSAGE,
  MAIN_DATE_FORMAT,
  REGEX,
} from "@/constants";
import moment from "moment";
import * as Yup from "yup";
import { number, object, string } from "yup";

const commonVal = {
  max: 1000,
  min: 1,
};

export const commonUtil = () => {
  return {
    email: string()
      .matches(REGEX.email, COMMON_VALIDATION_MASSAGE.emailValidation)
      .trim(),
    name: string()
      .min(commonVal.min, COMMON_VALIDATION_MASSAGE.minVal)
      .max(commonVal.max, COMMON_VALIDATION_MASSAGE.maxVal),
    url: string()
      .matches(REGEX.website, COMMON_VALIDATION_MASSAGE.urlValidation)
      .trim(),
    password: string()
      .matches(
        REGEX.password,
        `password must contain at least one uppercase letter, one number, and one special character`
      )
      .min(8)
      .trim(),
    date: Yup.string()
      .required("Date is required")
      .test("is-valid-format", `invalid date format`, (value) =>
        moment(value, MAIN_DATE_FORMAT, true).isValid()
      )
      .test("is-future-date", `date cannot be in the past`, (value) => {
        const today = moment().startOf("day");
        const selectedDate = moment(value, MAIN_DATE_FORMAT, true);
        return selectedDate.isSameOrAfter(today);
      }),
    positiveNumber: number().positive().integer(),
    confirmPass: string()
      .test("passwords-match", `passwords must match`, function (value) {
        return value === this.parent.newPassword;
      })
      .trim(),
  };
};

export const LoginValidationUtil = object().shape({
  email: commonUtil().email.required(COMMON_VALIDATION_MASSAGE.emailValidation),
  password: commonUtil().password.required(COMMON_VALIDATION_MASSAGE.password),
});
