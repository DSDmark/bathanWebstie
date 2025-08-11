import { useRegisterMutation } from '@/api/user'
import { ErrorMessage, SelectWithSearch } from '@/components'
import { ALERT_MESSAGES, PROTECTED_ROUTE, ROLES } from '@/constants'
import { useAppDispatch, useAppSelector, useFormikWithDefaultsProps } from '@/hooks'
import { setUser } from '@/states'
import { getAllDepartmentData } from '@/states/actions'
import { RegisterValidationUtil } from '@/utils'
import { Box, Button, Container, GridLegacy as Grid, Paper, TextField, Typography } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import toast from 'react-hot-toast'

export default function RegisterPage() {
  const router = useRouter()
  const [register, { isLoading, isError, isSuccess, data }] = useRegisterMutation()
  const { departments } = useAppSelector(({ common }) => common)
  const dispatch = useAppDispatch()
  // const dispatch = useAppDispatch();
  const formik = useFormikWithDefaultsProps({
    initialValues: {
      email: '',
      userName: '',
      password: '',
      department: { id: 0, name: '' },
      confirmPassword: '',
    },
    validationSchema: RegisterValidationUtil,
    onSubmit: (val, { setSubmitting }) => {
      setSubmitting(true)
      const payload = {
        email: val.email,
        password: val.password,
        name: val.userName,
        department: val.department.name,
      }
      register(payload)
    },
  })

  useEffect(() => {
    if (isSuccess) {
      formik.setSubmitting(false)
      toast.success(data.message || ALERT_MESSAGES.submittingSuccessMassage)
      dispatch(setUser(data.data))
      router.replace(PROTECTED_ROUTE.dashboard)
    }
    if (isSuccess || isError) {
      formik.setSubmitting(false)
    }
    if (!departments.data?.length) {
      dispatch(getAllDepartmentData(''))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess, isError, router, departments.data?.length])

  return (
    <Container maxWidth='sm'>
      <Paper elevation={3} sx={{ mt: 8, p: 4 }}>
        <Typography variant='h5' align='center' gutterBottom>
          Register As a {ROLES.manager}
        </Typography>
        <Box component='form' onSubmit={formik.handleSubmit} sx={{ mt: 2 }}>
          <TextField fullWidth label='Username' margin='normal' required {...formik.getFieldProps('userName')} />
          <ErrorMessage fieldName='userName' formik={formik} />
          <TextField
            fullWidth
            label='Email'
            sx={{ textTransform: 'lowercase' }}
            type='email'
            margin='normal'
            required
            {...formik.getFieldProps('email')}
          />
          <ErrorMessage fieldName='email' formik={formik} />
          <SelectWithSearch
            options={departments.data}
            label='department'
            isLoading={departments.isLoading}
            required
            value={formik.values.department}
            onChange={(val: any) => formik.setFieldValue('department', val)}
          />
          <ErrorMessage fieldName='email' formik={formik} />
          <TextField
            fullWidth
            label='Password'
            type='password'
            margin='normal'
            required
            {...formik.getFieldProps('password')}
          />
          <ErrorMessage fieldName='password' formik={formik} />
          <TextField
            fullWidth
            label='Confirm Password'
            type='password'
            margin='normal'
            required
            {...formik.getFieldProps('confirmPassword')}
          />
          <ErrorMessage fieldName='confirmPassword' formik={formik} />
          <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }} disabled={formik.isSubmitting}>
            {formik.isSubmitting ? ALERT_MESSAGES.submittingLoading : 'Sign Up'}
          </Button>
          <Grid container justifyContent='flex-end'>
            <Grid item>
              <Link href='/login' passHref>
                <Typography variant='body2'>Already have an account? Login</Typography>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  )
}
