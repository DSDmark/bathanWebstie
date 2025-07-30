import { Box, Button, Grid, MenuItem, Stack, TextField, Typography, useTheme } from '@mui/material'
import { useState } from 'react'

const departments = ['IT', 'HR', 'Finance', 'Marketing']
const skillsList = ['Node.js', 'React.js', 'MongoDB', 'Express', 'Next.js']

export default function CreateEngineerForm() {
  const theme = useTheme()

  const [form, setForm] = useState({
    name: '',
    email: '',
    contact: '',
    department: '',
    description: '',
    password: '',
    skills: [] as string[],
    seniority: '',
    employmentType: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSkillToggle = (skill: string) => {
    setForm(prev => ({
      ...prev,
      skills: prev.skills.includes(skill) ? prev.skills.filter(s => s !== skill) : [...prev.skills, skill],
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(form) // Replace with API call
  }

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

      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid size={6}>
            <TextField label='Name' name='name' fullWidth required value={form.name} onChange={handleChange} />
          </Grid>
          <Grid size={6}>
            <TextField
              label='Email'
              name='email'
              fullWidth
              required
              value={form.email}
              onChange={handleChange}
              type='email'
            />
          </Grid>

          <Grid size={6}>
            <TextField
              label='Contact'
              name='contact'
              fullWidth
              value={form.contact}
              onChange={handleChange}
              type='tel'
            />
          </Grid>

          <Grid size={6}>
            <TextField
              label='Department'
              name='department'
              select
              fullWidth
              value={form.department}
              onChange={handleChange}
            >
              {departments.map(dep => (
                <MenuItem key={dep} value={dep}>
                  {dep}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid size={12}>
            <TextField
              label='Description'
              name='description'
              fullWidth
              multiline
              rows={3}
              value={form.description}
              onChange={handleChange}
            />
          </Grid>

          <Grid size={12}>
            <TextField
              label='Password'
              name='password'
              fullWidth
              type='password'
              required
              value={form.password}
              onChange={handleChange}
            />
          </Grid>

          <Grid size={12}>
            <TextField
              label='Seniority'
              name='seniority'
              select
              fullWidth
              value={form.seniority}
              onChange={handleChange}
            >
              <MenuItem value='junior'>Junior</MenuItem>
              <MenuItem value='mid'>Mid</MenuItem>
              <MenuItem value='senior'>Senior</MenuItem>
            </TextField>
          </Grid>

          <Grid size={12}>
            <TextField
              label='Employment Type'
              name='employmentType'
              select
              fullWidth
              value={form.employmentType}
              onChange={handleChange}
            >
              <MenuItem value='full-time'>Full-Time</MenuItem>
              <MenuItem value='part-time'>Part-Time</MenuItem>
            </TextField>
          </Grid>

          <Grid size={12}>
            <Typography variant='subtitle1' mb={1}>
              Select Skills
            </Typography>
            <Stack direction='row' spacing={1} flexWrap='wrap'>
              {skillsList.map(skill => (
                <Button
                  key={skill}
                  variant={form.skills.includes(skill) ? 'contained' : 'outlined'}
                  size='small'
                  onClick={() => handleSkillToggle(skill)}
                  sx={{
                    borderRadius: 5,
                    textTransform: 'none',
                    bgcolor: form.skills.includes(skill) ? 'primary.main' : 'neutral.100',
                    color: form.skills.includes(skill) ? 'primary.contrastText' : 'text.primary',
                    '&:hover': {
                      bgcolor: form.skills.includes(skill) ? 'primary.dark' : 'neutral.200',
                    },
                  }}
                >
                  {skill}
                </Button>
              ))}
            </Stack>
          </Grid>

          <Grid size={12}>
            <Button
              type='submit'
              variant='contained'
              size='large'
              sx={{
                bgcolor: 'primary.main',
                color: 'primary.contrastText',
                '&:hover': { bgcolor: 'primary.dark' },
              }}
            >
              Create Engineer
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  )
}
