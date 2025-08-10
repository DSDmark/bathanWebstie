import { SelectWithSearch } from '@/components'
import { EDIT_PROFILE_FORM_FIELDS, EMP_TYPES } from '@/constants'
import { useAppSelector } from '@/hooks'
import { Box, FormControl, Slider, TextField, Typography } from '@mui/material'
import { FormikProps } from 'formik'

interface IProps {
  formik: FormikProps<typeof EDIT_PROFILE_FORM_FIELDS>
}

const EngineerProfile = ({ formik }: IProps) => {
  const { seniorityLevels } = useAppSelector(({ common }) => common)

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
      <TextField label='Name' fullWidth {...formik.getFieldProps('engineerName')} />
      <SelectWithSearch
        options={seniorityLevels.data}
        label='seniority level'
        isLoading={seniorityLevels.isLoading}
        required
        value={formik.values.seniorityLevels}
        onChange={(val: any) => formik.setFieldValue('seniorityLevels', val)}
      />
      <FormControl fullWidth>
        <SelectWithSearch
          options={Object.values(EMP_TYPES)}
          label='Employment Type'
          required
          value={formik.values.employmentType}
          onChange={(val: any) => formik.setFieldValue('employmentType', val)}
        />
      </FormControl>
      <Box>
        <Typography>Current Availability ({formik.values.availability}% available)</Typography>
        <Slider
          value={formik.values.availability}
          onChange={(_: any, val: any) => formik.setFieldValue('availability', val)}
          aria-labelledby='availability-slider'
          min={0}
          max={100}
          valueLabelDisplay='auto'
        />
      </Box>
    </Box>
  )
}

export default EngineerProfile
