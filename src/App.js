import React from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Container, Typography, Button } from "@mui/material";
import Courses from "./components/Courses";
import PHYS227 from "./components/courses//PHYS227/PHYS227";

function App() {
  return (
    <Router>
      <Container>
        <Typography variant="h4" gutterBottom>
          Hi! I'm Yinglei Peng.
        </Typography>
        <Button variant="contained" component={Link} to="/courses">
          Courses
        </Button>
        <Routes>
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/PHYS227" element={<PHYS227 />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
