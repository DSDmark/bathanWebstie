import ExitToAppTwoToneIcon from "@mui/icons-material/ExitToAppTwoTone";
import { Box, Button, Dialog, Stack } from "@mui/material";
import { ALERT_MESSAGES } from "../../constants";
import { handleCloseUtil } from "../../utils";

interface IProps {
  open: boolean;
  title?: string;
  description?: string;
  setInitialState: any;
  buttonTitle?: string;
  handleClick: () => void;
  isLoading?: boolean;
}

const DangerDialog = ({
  open,
  setInitialState,
  title = "Warning",
  description = "Are you sure you want to delete this entry",
  buttonTitle = "Delete",
  isLoading = false,
  handleClick,
}: IProps) => {
  return (
    <Dialog
      fullWidth={false}
      sx={{ "& .MuiPaper-root": { maxWidth: "400px", borderRadius: "12px" } }}
      onClose={() => handleCloseUtil(setInitialState)}
      open={open}
      aria-labelledby="draggable-dialog-title"
    >
      <Box sx={{ p: 2 }}>
        <Stack direction={"column"} spacing={2} alignItems={"self-start"}>
          <ExitToAppTwoToneIcon fontSize="large" sx={{ color: "#EC5962" }} />
          <h5>{title}</h5>
          <Stack
            direction={"column"}
            spacing={1}
            alignItems={"self-start"}
            sx={{
              "& h5": { fontSize: "18px", fontWeight: "600" },
              "& p": {
                fontSize: "16px",
                fontWeight: "400",
                color: "#666666",
              },
            }}
          >
            <p>{description}</p>
          </Stack>
        </Stack>
        <Stack
          direction={"row"}
          alignItems={"center"}
          spacing={2}
          sx={{ mt: 2 }}
        >
          <Button
            variant="outlined"
            fullWidth
            onClick={() => handleCloseUtil(setInitialState)}
            sx={{
              borderColor: "#D9D9D9",
              color: "#4C4C4C",
              textTransform: "capitalize",
              borderRadius: "8px",
              fontSize: "14px",
              "&:hover": { borderColor: "#D9D9D9" },
            }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            fullWidth
            disableElevation
            disabled={isLoading}
            onClick={handleClick}
            sx={{
              background: "#EC5962",
              color: "#fff",
              textTransform: "capitalize",
              borderRadius: "8px",
              fontSize: "14px",
              "&:hover": { background: "#EC5962" },
            }}
          >
            {isLoading ? ALERT_MESSAGES.submittingLoading : buttonTitle}
          </Button>
        </Stack>
      </Box>
    </Dialog>
  );
};
export default DangerDialog;
