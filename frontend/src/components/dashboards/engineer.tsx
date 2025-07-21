import React from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";

export default function EngineerDashboard() {
  const projects = [
    { title: "Project Alpha", due: "2025-08-01" },
    { title: "Project Beta", due: "2025-09-15" },
  ];
  return (
    <>
      <Typography variant="h4" gutterBottom>
        My Assignments
      </Typography>
      <List>
        {projects.map((p) => (
          <React.Fragment key={p.title}>
            <ListItem>
              <ListItemText primary={p.title} secondary={`Due: ${p.due}`} />
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </>
  );
}
