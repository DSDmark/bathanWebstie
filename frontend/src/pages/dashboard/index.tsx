import React from "react";
import { Typography, GridLegacy as Grid, Paper } from "@mui/material";
import { ROLES } from "@/constants";
import { EngineerDashboard, ManagerDashboard } from "@/components";
import AvailabilityPlanning from "@/components/dashboards/availability";

export default function DashboardPage() {
  let Content;
  const role: any = "Manager";
  switch (role) {
    case ROLES.engineer:
      Content = ManagerDashboard;
      break;
    case ROLES.manager:
      Content = EngineerDashboard;
      break;
    default:
      Content = AvailabilityPlanning;
  }
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Welcome to the Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={4}>
          <Paper elevation={2} sx={{ p: 2 }}>
            <Content />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}
