import React from "react";
import { Typography, GridLegacy as Grid, Paper } from "@mui/material";

export default function ManagerDashboard() {
  const team = [
    { name: "Alice", load: "Overloaded" },
    { name: "Bob", load: "Underutilized" },
    { name: "Charlie", load: "Balanced" },
  ];
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Team Overview
      </Typography>
      <Grid container spacing={2}>
        {team.map((member) => (
          <Grid item xs={12} md={4} key={member.name}>
            <Paper sx={{ p: 2 }}>
              <Typography>{member.name}</Typography>
              <Typography
                color={
                  member.load === "Overloaded"
                    ? "error.main"
                    : member.load === "Underutilized"
                    ? "success.main"
                    : "text.primary"
                }
              >
                {member.load}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
