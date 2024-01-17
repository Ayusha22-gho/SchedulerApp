import React, { useState } from "react";
import { TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import "./ScheduleForm.css";
interface Schedule {
  title: string;
  description: string;
  subject: string;
  frequency: string;
  repeat: string;
  time: string;
}
interface ScheduleFormProps {
  onSubmit: (schedule: Schedule) => void;
  onCancel: () => void;
}
const ScheduleForm: React.FC<ScheduleFormProps> = ({ onSubmit, onCancel }) => {
  const [formData, setFormData] = useState<Schedule>({
    title: "",
    description: "",
    subject: "",
    frequency: "Weekly",
    repeat: "First Monday",
    time: "12:00",
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleFrequencySelect = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleRepeatSelect = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(formData);
  };
  const renderRepeatedField = () => {
    if (formData.frequency === "Monthly") {
      return (
        <Select
          value={formData.repeat}
          label="Repeat"
          variant="outlined"
          fullWidth
          name="repeat" 
          onChange={handleRepeatSelect}
        >
          <MenuItem value = "First Monday">First Monday</MenuItem>
          <MenuItem value = "Last Friday">Last Friday</MenuItem>
        </Select>
      )
    } else if (formData.frequency === "Weekly") {
      return (
        <div className="monthly-selection">
          <button type="button" onClick={handleRepeatSelect} name="repeat" value="Sunday">S</button>
          <button type="button" onClick={handleRepeatSelect} name="repeat" value="Monday">M</button>
          <button type="button" onClick={handleRepeatSelect} name="repeat" value="Tuesday">T</button>
          <button type="button" onClick={handleRepeatSelect} name="repeat" value="Wednesday">W</button>
          <button type="button" onClick={handleRepeatSelect} name="repeat" value="Thursday">T</button>
          <button type="button" onClick={handleRepeatSelect} name="repeat" value="Friday">F</button>
          <button type="button" onClick={handleRepeatSelect} name="repeat" value="Saturday">S</button>

        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div className="popover-container">
      <p className="popover-heading">Add Schedule</p>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="input-container">
          <label>
            Descripiton:
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="input-container">
          <label>
            Subject:
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="input-container">
          <label>
            Frequency:
            <select
              name="frequency"
              id="frequency"
              onChange={handleFrequencySelect}
            >
              <option value="Weekly" selected>
                Weekly
              </option>
              <option value="Monthly">Monthly</option>
              <option value="Daily">Daily</option>
            </select>
          </label>
        </div>
        <div className="input-container">{renderRepeatedField()}</div>

        <div className="inpit-container">
          <label>
            Time:
            <TextField
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton edge="end">
                      <KeyboardArrowDownIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </label>
        </div>
        <button type="submit">Done</button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
};
export default ScheduleForm;
