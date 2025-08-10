import { useCreateEngineerMutation } from '@/api/user'
import { BaseBtn, SelectWithSearch } from '@/components'
import { ALERT_MESSAGES, CREATE_ENGINEER_MANAGEMENT, EMP_TYPES, PROTECTED_ROUTE } from '@/constants'
import { useAppDispatch, useAppSelector, useFormikWithDefaultsProps } from '@/hooks'
import { getAllDepartmentData, getAllSeniorityLevelsData } from '@/states/actions'
import { OnChange } from '@/types'
import { Box, Grid, TextField, Typography, useTheme } from '@mui/material'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import toast from 'react-hot-toast'

export default function CreateEngineerForm() {
  const theme = useTheme()
  const dispatch = useAppDispatch()
  const router = useRouter()
  const { departments, seniorityLevels } = useAppSelector(({ common }) => common)
  const [createEngineer, { isSuccess, data, isError }] = useCreateEngineerMutation()

  const formik = useFormikWithDefaultsProps({
    initialValues: CREATE_ENGINEER_MANAGEMENT,
    onSubmit: (val, { setSubmitting }) => {
      setSubmitting(true)
      const payload = {
        name: val.name,
        email: val.email,
        contact: val.contact,
        department: val.department.id,
        description: val.description,
        seniorityLevels: val.seniorityLevels.id,
        empType: val.empType.id,
      }
      createEngineer(payload)
    },
  })

  useEffect(() => {
    if (!departments.data?.length) {
      dispatch(getAllDepartmentData(''))
    }
    if (!seniorityLevels.data?.length) {
      dispatch(getAllSeniorityLevelsData(''))
    }
    if (isSuccess) {
      formik.setSubmitting(false)
      toast.success(data?.message || ALERT_MESSAGES.submittingSuccessMassage)
      router.push(PROTECTED_ROUTE.engineerManagement)
    }
    if (isError) {
      formik.setSubmitting(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess, isError])

  return (
    <Box
      sx={{
        p: 4,
        borderRadius: 3,
        bgcolor: theme.palette.background.paper,
        boxShadow: theme.shadows[10],
        maxWidth: 700,
        mx: 'auto',
      }}
    >
      <Typography variant='h5' fontWeight={600} mb={3} color='primary.main'>
        Create Engineer Profile
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={3}>
          <Grid size={6}>
            <TextField label='Name' fullWidth required {...formik.getFieldProps('name')} />
          </Grid>

          <Grid size={6}>
            <TextField label='Email' fullWidth required {...formik.getFieldProps('email')} />
          </Grid>

          <Grid size={6}>
            <TextField label='Contact' type='number' fullWidth required {...formik.getFieldProps('contact')} />
          </Grid>

          <Grid size={6}>
            <SelectWithSearch
              sx={{ '& .MuiFormControl-marginNormal': { mt: '0px' } }}
              limitTags={4}
              options={departments?.data}
              label='Departments'
              required
              isLoading={departments?.isLoading}
              value={formik.values.department}
              onChange={(val: any) => formik.setFieldValue('department', val)}
            />
          </Grid>

          <Grid size={12}>
            <TextField
              label='Description'
              name='description'
              fullWidth
              multiline
              rows={3}
              value={formik.values.description}
              onChange={(e: OnChange) => {
                formik.setFieldValue('description', e.target?.value)
              }}
            />
          </Grid>

          <Grid size={12}>
            <SelectWithSearch
              limitTags={4}
              options={seniorityLevels?.data}
              label='Seniority Levels'
              required
              isLoading={seniorityLevels?.isLoading}
              value={formik.values.seniorityLevels}
              onChange={(val: any) => formik.setFieldValue('seniorityLevels', val)}
            />
          </Grid>

          <Grid size={12}>
            <SelectWithSearch
              limitTags={4}
              options={Object.values(EMP_TYPES)}
              label='Employment Types'
              required
              value={formik.values.empType}
              onChange={(val: any) => formik.setFieldValue('empType', val)}
            />
          </Grid>
          <Grid size={12}>
            <BaseBtn variant='contained' isLoading={formik.isSubmitting} type='submit' disabled={formik.isSubmitting} />
          </Grid>
        </Grid>
      </form>
    </Box>
  )
}
