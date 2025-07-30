import { useUpdateUserProfileMutation } from '@/api/user'
import { BaseBtn } from '@/components'
import { ALERT_MESSAGES, DEFAULT_OPTIONS_VALUE, EDIT_PROFILE_FORM_FIELDS } from '@/constants'
import { useAppDispatch, useAppSelector, useFormikWithDefaultsProps } from '@/hooks'
import { setUser } from '@/states'
import { getAllSkillsData } from '@/states/actions'
import { Box, useTheme } from '@mui/material'
import React, { useEffect } from 'react'
import toast from 'react-hot-toast'
import ProfileForm from './components/ProfileForm'

const ProfileEditPage: React.FC = () => {
  const { skills } = useAppSelector(({ common }) => common)
  const { details } = useAppSelector(({ user }) => user)
  const theme = useTheme()
  const dispatch = useAppDispatch()
  const [updateProfile, { isSuccess, data, isError }] = useUpdateUserProfileMutation()

  const formik = useFormikWithDefaultsProps({
    initialValues: EDIT_PROFILE_FORM_FIELDS,
    onSubmit: (val, { setSubmitting }) => {
      setSubmitting(true)
      const payload = {
        name: val.name,
        description: val.description,
        contact: val.contact,
        skills: val.skills.map((i: any) => i.id),
        department: val.department.id,
      }
      updateProfile(payload)
    },
  })

  useEffect(() => {
    if (!skills.data?.length) {
      dispatch(getAllSkillsData(''))
    }
    if (isSuccess) {
      dispatch(setUser(data?.data))
      formik.setSubmitting(false)
      toast.success(data?.message || ALERT_MESSAGES.submittingSuccessMassage)
    }
    if (isError) {
      formik.setSubmitting(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess, isError])

  useEffect(() => {
    if (details?.id) {
      formik.setValues({
        name: details?.name || '',
        description: details?.description || '',
        contact: details?.contact || '',
        skills: (details?.skills as any) || [],
        department: (details?.department as any) || DEFAULT_OPTIONS_VALUE,
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [details?.id])
  return (
    <Box
      sx={{
        p: 4,
        borderRadius: 3,
        bgcolor: theme.palette.background.paper,
        boxShadow: theme.shadows[10],
        maxWidth: 700,
        mx: 'auto',
        mt: 4,
      }}
    >
      <Box component={'form'} onSubmit={formik.handleSubmit} noValidate sx={{ mt: 1 }}>
        <ProfileForm formik={formik} details={details} skills={skills} />
        <BaseBtn variant='contained' isLoading={formik.isSubmitting} type='submit' disabled={formik.isSubmitting} />
      </Box>
    </Box>
  )
}

export default ProfileEditPage
