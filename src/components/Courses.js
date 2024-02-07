import React from "react";
import { Link } from "react-router-dom";
import { Typography, Button } from "@mui/material";

function Courses() {
  return (
    <div>
      <Typography variant="h5">Courses</Typography>
      <Button variant="contained" component={Link} to="/courses/PHYS227">
        PHYS227
      </Button>
    </div>
  );
}

export default Courses;
