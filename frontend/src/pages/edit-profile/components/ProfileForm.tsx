import { SelectWithSearch } from '@/components'
import { ROLES } from '@/constants'
import { Box, TextField, Typography } from '@mui/material'

const ProfileForm = ({ formik, details, skills }: any) => {
  return (
    <Box>
      <Typography variant='h5' fontWeight={600} mb={3} color='primary.main'>
        {ROLES.manager} Profile
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <TextField label='Name' fullWidth required {...formik.getFieldProps('name')} />
        <TextField label='Email' disabled fullWidth value={details?.email} aria-readonly />
        <TextField label='Description' multiline rows={3} fullWidth {...formik.getFieldProps('description')} />
        <TextField label='Contact' type='tel' fullWidth {...formik.getFieldProps('contact')} />
        <SelectWithSearch
          multiple
          limitTags={4}
          options={skills?.data}
          label='Skills'
          required
          isLoading={skills?.isLoading}
          value={formik.values.skills}
          onChange={(val: any) => formik.setFieldValue('skills', val)}
        />
      </Box>
    </Box>
  )
}

export default ProfileForm
