import { MAIN_DATE_FORMAT } from "@/constants";
import { formatDateUtil } from "@/utils";
import { Box, FormLabel, SxProps } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import moment from "moment";
import React from "react";

interface CustomDatePickerProps {
  label: string;
  value?: any;
  onChange: (value: any) => void;
  disablePast?: boolean;
  format?: string;
  sx?: SxProps;
  required?: boolean;
  name?: string;
}

const DatePickerInput: React.FC<CustomDatePickerProps> = ({
  label,
  value,
  onChange,
  disablePast = true,
  format = MAIN_DATE_FORMAT,
  sx,
  required,
  name,
  ...rest
}) => {
  return (
    <Box mt={2} width={"100%"} sx={sx}>
      {label && (
        <FormLabel
          sx={{
            color: "#333333",
            fontSize: "14px",
            fontWeight: "500",
            padding: "13px 0px 4px 1px",
            fontFamily: "Inter, sans-serif",
            display: "block",
          }}
        >
          {label}
          {Boolean(required) && <span style={{ color: "red" }}>*</span>}
        </FormLabel>
      )}
      <DatePicker
        sx={{
          "& .MuiInputBase-root": {
            borderRadius: "8px",
            width: "100%",
            mt: 1,
            height: "42px",
          },
          borderRadius: "8px",
          fontFamily: "Inter, sans-serif",
          "& input:-webkit-autofill": {
            WebkitBoxShadow: "0 0 0 1000px white inset",
            WebkitTextFillColor: "#000",
          },
          "& input:-webkit-autofill:focus": {
            WebkitBoxShadow: "0 0 0 1000px white inset",
            WebkitTextFillColor: "#000",
          },
          "& .Mui-disabled": {
            background: "#E9E6E6",
          },
          "& input:-webkit-autofill:hover": {
            WebkitBoxShadow: "0 0 0 1000px white inset",
            WebkitTextFillColor: "#000",
          },
          ...sx,
        }}
        disablePast={disablePast}
        format={format}
        value={moment(value)}
        onChange={(val) => onChange(formatDateUtil(val, "date"))}
        name={name}
        {...rest}
      />
    </Box>
  );
};

export default DatePickerInput;
