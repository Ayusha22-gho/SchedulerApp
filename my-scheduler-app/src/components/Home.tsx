import React from "react";
import "./Home.css";
import SearchIcon from "@mui/icons-material/Search";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Popover from "@mui/material/Popover";
import { Button } from "@mui/material";
import Table from "./Table.tsx";
import ScheduleForm from "./ScheduleForm.tsx"

interface Schedule {
  title: string;
  description: string;
  subject: string;
  frequency: string;
  repeat: string;
  time: string;
}
const Home: React.FC = () => {
  const [schedules,setSchedules] = React.useState<Schedule[]>([]);
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleFormSubmit = (formData:Schedule)=>{
    setSchedules((prevData)=>(
      [...prevData,formData]
    ))
    console.log("formdaat",formData)
  }
  const handleFormCancel = ()=>{
    handleClose()
  }
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <div className="home-page">
      <div className="left-navigation"></div>
      <div className="main-content">
        <div className="horizontal-space"></div>
        <div className="menu-container">
          <div className="search">
            <input
              type="search"
              className="search-filed"
              placeholder="Search"
            />
            <SearchIcon className="search-icon" />
          </div>
          <div className="add-button">
            <Button
              className="add"
              variant="text"
              size="small"
              startIcon={<AddCircleOutlineIcon />}
              onClick={handleClick}
            >
              Add
            </Button>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical : "top",
                horizontal: "right"
              }}
            >
              <ScheduleForm onSubmit={handleFormSubmit}
              onCancel={handleFormCancel} />
            </Popover>
          </div>
        </div>
        <div className="content-container">
          <div className="table-conatiner"><Table schedules = {schedules}/></div>
        </div>
      </div>
    </div>
  );
};
export default Home;
