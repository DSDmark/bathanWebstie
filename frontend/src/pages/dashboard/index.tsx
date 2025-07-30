import { EngineerDashboard, ManagerDashboard } from '@/components'
import AvailabilityPlanning from '@/components/dashboards/availability'
import { ROLES } from '@/constants'
import { useAppSelector } from '@/hooks'
import { GridLegacy as Grid, Paper, Typography } from '@mui/material'

export default function DashboardPage() {
  const { details } = useAppSelector(({ user }) => user)
  let Content
  switch (details.role) {
    case ROLES.engineer:
      Content = ManagerDashboard
      break
    case ROLES.manager:
      Content = EngineerDashboard
      break
    default:
      Content = AvailabilityPlanning
  }
  return (
    <>
      <Typography variant='h5' gutterBottom>
        Hey {details.name}, Welcome
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={4}>
          <Paper elevation={2} sx={{ p: 2 }}>
            <Content />
          </Paper>
        </Grid>
      </Grid>
    </>
  )
}
