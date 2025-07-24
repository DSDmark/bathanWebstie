import { useRegisterMutation } from "@/api/user";
import { ErrorMessage } from "@/components";
import { ALERT_MESSAGES, ROLES } from "@/constants";
import { useFormikWithDefaultsProps } from "@/hooks";
import { RegisterValidationUtil } from "@/utils";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import PersonIcon from "@mui/icons-material/Person";
import {
  Box,
  Button,
  Container,
  GridLegacy as Grid,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function RegisterPage() {
  const router = useRouter();
  const [register, { isLoading, isError, isSuccess, data }] =
    useRegisterMutation();
  // const dispatch = useAppDispatch();
  const formik = useFormikWithDefaultsProps({
    initialValues: {
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: RegisterValidationUtil,
    onSubmit: (val, { setSubmitting }) => {
      setSubmitting(true);
      const payload = {
        email: val.email,
        password: val.password,
      };
      register(payload);
    },
  });

  useEffect(() => {
    if (isSuccess) {
      formik.setSubmitting(false);
      // toast.success(data);
      // dispatch(setUser(data.data));
      // router.replace(PROTECTED_ROUTE.dashboard);
    }
    if (isSuccess || isError) {
      formik.setSubmitting(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess, isError, router]);
  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ mt: 8, p: 4 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Register As a {ROLES.manager}
        </Typography>
        <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 2 }}>
          <TextField
            fullWidth
            label="Username"
            margin="normal"
            required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon />
                </InputAdornment>
              ),
            }}
            {...formik.getFieldProps("userName")}
          />
          <ErrorMessage fieldName="userName" formik={formik} />
          <TextField
            fullWidth
            label="Email"
            margin="normal"
            required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              ),
            }}
            {...formik.getFieldProps("email")}
          />
          <ErrorMessage fieldName="email" formik={formik} />
          <TextField
            fullWidth
            label="Password"
            type="password"
            margin="normal"
            required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              ),
            }}
            {...formik.getFieldProps("password")}
          />
          <ErrorMessage fieldName="password" formik={formik} />
          <TextField
            fullWidth
            label="Confirm Password"
            type="password"
            margin="normal"
            required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              ),
            }}
            {...formik.getFieldProps("confirmPassword")}
          />
          <ErrorMessage fieldName="confirmPassword" formik={formik} />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={formik.isSubmitting}
          >
            {formik.isSubmitting ? ALERT_MESSAGES.submittingLoading : "Sign Up"}
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/login" passHref>
                <Typography variant="body2">
                  Already have an account? Login
                </Typography>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
}
