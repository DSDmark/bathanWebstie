import React from "react";
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

export default function AvailabilityPlanning() {
  const availability = [
    { name: "Alice", freeDate: "2025-08-10" },
    { name: "Bob", freeDate: "2025-07-25" },
    { name: "Charlie", freeDate: "2025-07-30" },
  ];
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Availability Planning
      </Typography>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Engineer</TableCell>
              <TableCell>Free From</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {availability.map((a) => (
              <TableRow key={a.name}>
                <TableCell>{a.name}</TableCell>
                <TableCell>{a.freeDate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </>
  );
}
