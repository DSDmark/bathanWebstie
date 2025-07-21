import { Typography } from "@mui/material";
import { getIn } from "formik";
import { useEffect } from "react";

interface IProps {
  fieldName: string;
  formik: any;
}

export const ErrorMessage = ({ fieldName, formik }: IProps) => {
  const error = getIn(formik.errors, fieldName);

  useEffect(() => {
    if (error) {
      const fieldSelector = `[name="${fieldName}"]`;
      const fieldElement = document.querySelector(
        fieldSelector
      ) as HTMLInputElement;

      if (fieldElement) {
        fieldElement.scrollIntoView({ behavior: "smooth", block: "center" });
        fieldElement.focus();
      } else {
        const autocompleteInput = document
          .querySelector(`[name="${fieldName}"]`)
          ?.closest(".MuiAutocomplete-root")
          ?.querySelector("input");
        if (autocompleteInput) {
          autocompleteInput.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
          autocompleteInput.focus();
        }
      }
    }
  }, [error, fieldName]);

  return error ? (
    <Typography
      variant="caption"
      style={{ color: "red", fontWeight: 600 }}
      sx={{
        "&.MuiTypography-root": {
          fontFamily: "Poppins",
          fontSize: "14px",
          fontWeight: 300,
        },
      }}
    >
      {error}
    </Typography>
  ) : null;
};

