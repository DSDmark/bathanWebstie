import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  OutlinedInput,
  Checkbox,
  ListItemText,
} from "@mui/material";
import { BasicDatePicker } from "../elements/datePickers";

const projectSkillsOptions = ["React", "Node.js", "Python", "DevOps", "UI/UX"];
const statusOptions = ["Active", "Planning", "Completed"];

interface ProjectDialogProps {
  open: boolean;
  onClose: () => void;
}

export default function ProjectManagementDialog({
  open,
  onClose,
}: ProjectDialogProps) {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [startDate, setStartDate] = React.useState<Date | null>(new Date());
  const [endDate, setEndDate] = React.useState<Date | null>(new Date());
  const [teamSize, setTeamSize] = React.useState(1);
  const [skills, setSkills] = React.useState<string[]>([]);
  const [status, setStatus] = React.useState("Active");

  const handleSave = () => {
    // TODO: save logic
    onClose();
  };

  return (
    <Dialog
      fullWidth={false}
      sx={{ "& .MuiPaper-root": { maxWidth: "800px", borderRadius: "12px" } }}
      onClose={onClose}
      open={open}
      aria-labelledby="project-dialog"
    >
      <DialogTitle id="project-dialog">Project Details</DialogTitle>
      <DialogContent>
        <Box sx={{ display: "grid", gap: 2, mt: 1 }}>
          <TextField
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
          />
          <TextField
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            multiline
            minRows={3}
            fullWidth
          />
          <BasicDatePicker
            label="Start Date"
            value={startDate}
            onChange={(newDate) => setStartDate(newDate)}
          />
          <BasicDatePicker
            label="End Date"
            value={endDate}
            onChange={(newDate) => setEndDate(newDate)}
          />
          <TextField
            label="Team Size"
            type="number"
            InputProps={{ inputProps: { min: 1 } }}
            value={teamSize}
            onChange={(e) => setTeamSize(Number(e.target.value))}
            fullWidth
          />
          <FormControl fullWidth>
            <InputLabel>Required Skills</InputLabel>
            <Select
              multiple
              value={skills}
              onChange={(e) => setSkills(e.target.value as string[])}
              input={<OutlinedInput label="Required Skills" />}
              renderValue={(selected) => selected.join(", ")}
            >
              {projectSkillsOptions.map((skill) => (
                <MenuItem key={skill} value={skill}>
                  <Checkbox checked={skills.indexOf(skill) > -1} />
                  <ListItemText primary={skill} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel>Status</InputLabel>
            <Select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              label="Status"
            >
              {statusOptions.map((s) => (
                <MenuItem key={s} value={s}>
                  {s}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" onClick={handleSave}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}
