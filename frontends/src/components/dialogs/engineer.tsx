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
  Checkbox,
  ListItemText,
  OutlinedInput,
} from "@mui/material";

const skillsOptions = ["React", "Node.js", "Python", "Java", "C#"];
const seniorityOptions = ["Junior", "Mid", "Senior", "Lead"];

interface EngineerDialogProps {
  open: boolean;
  onClose: () => void;
}

export default function EngineerManagementDialog({
  open,
  onClose,
}: EngineerDialogProps) {
  const [name, setName] = React.useState("");
  const [skills, setSkills] = React.useState<string[]>([]);
  const [seniority, setSeniority] = React.useState("");
  const [employment, setEmployment] = React.useState<"Full-time" | "Part-time">(
    "Full-time"
  );
  const [allocation, setAllocation] = React.useState(100);

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
      aria-labelledby="engineer-dialog"
    >
      <DialogTitle id="engineer-dialog">Engineer Profile</DialogTitle>
      <DialogContent>
        <Box sx={{ display: "grid", gap: 2, mt: 1 }}>
          <TextField
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
          />
          <FormControl fullWidth>
            <InputLabel>Skills</InputLabel>
            <Select
              multiple
              value={skills}
              onChange={(e) => setSkills(e.target.value as string[])}
              input={<OutlinedInput label="Skills" />}
              renderValue={(selected) => selected.join(", ")}
            >
              {skillsOptions.map((skill) => (
                <MenuItem key={skill} value={skill}>
                  <Checkbox checked={skills.indexOf(skill) > -1} />
                  <ListItemText primary={skill} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel>Seniority</InputLabel>
            <Select
              value={seniority}
              onChange={(e) => setSeniority(e.target.value)}
              label="Seniority"
            >
              {seniorityOptions.map((level) => (
                <MenuItem key={level} value={level}>
                  {level}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel>Employment Type</InputLabel>
            <Select
              value={employment}
              onChange={(e) => setEmployment(e.target.value as any)}
              label="Employment Type"
            >
              <MenuItem value="Full-time">Full-time</MenuItem>
              <MenuItem value="Part-time">Part-time</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="Allocated %"
            type="number"
            InputProps={{ inputProps: { min: 0, max: 100 } }}
            value={allocation}
            onChange={(e) => setAllocation(Number(e.target.value))}
            helperText="Percentage allocated (100% for full-time)"
            fullWidth
          />
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
