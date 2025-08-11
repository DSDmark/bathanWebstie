import { useLoginMutation } from '@/api/user'
import { ErrorMessage } from '@/components'
import { ALERT_MESSAGES, PROTECTED_ROUTE } from '@/constants'
import { useAppDispatch, useFormikWithDefaultsProps } from '@/hooks'
import { setUser } from '@/states'
import { LoginValidationUtil } from '@/utils'
import EmailIcon from '@mui/icons-material/Email'
import LockIcon from '@mui/icons-material/Lock'
import { Box, Button, Container, GridLegacy as Grid, InputAdornment, Paper, TextField, Typography } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import toast from 'react-hot-toast'

export default function LoginPage() {
  const router = useRouter()
  const [login, { isLoading, isError, isSuccess, data }] = useLoginMutation()
  const dispatch = useAppDispatch()
  const formik = useFormikWithDefaultsProps({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: LoginValidationUtil,
    onSubmit: (val, { setSubmitting }) => {
      setSubmitting(true)
      const payload = {
        email: val.email,
        password: val.password,
      }
      login(payload)
    },
  })

  useEffect(() => {
    if (isSuccess) {
      formik.setSubmitting(false)
      toast.success('User Login Succeeded')
      dispatch(setUser(data.data))
      router.push(PROTECTED_ROUTE.dashboard)
    }
    if (isSuccess || isError) {
      formik.setSubmitting(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess, isError, router])
  return (
    <Container maxWidth='sm'>
      <Paper elevation={3} sx={{ mt: 8, p: 4 }}>
        <Typography variant='h5' align='center' gutterBottom>
          Login
        </Typography>
        <form onSubmit={formik.handleSubmit} className='loginBox'>
          <Box sx={{ mt: 2 }}>
            <TextField
              fullWidth
              label='Email'
              type='email'
              margin='normal'
              required
              sx={{ textTransform: 'lowercase' }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
              {...formik.getFieldProps('email')}
            />
            <ErrorMessage fieldName='email' formik={formik} />
            <TextField
              fullWidth
              label='Password'
              type='password'
              margin='normal'
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <LockIcon />
                  </InputAdornment>
                ),
              }}
              {...formik.getFieldProps('password')}
            />
            <ErrorMessage fieldName='password' formik={formik} />
            <Button
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
              type='submit'
              disabled={isLoading && formik.isSubmitting}
            >
              {isLoading && formik.isSubmitting ? ALERT_MESSAGES.submittingLoading : 'Sign In'}
            </Button>
            <Grid container justifyContent='flex-end'>
              <Grid item>
                <Link href='/register' passHref>
                  <Typography variant='body2'>Don&apos;t have an account? Register</Typography>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </form>
      </Paper>
    </Container>
  )
}
