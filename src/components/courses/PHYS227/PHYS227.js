import React from "react";
import { Typography, Link } from "@mui/material";

function PHYS227() {
  // Assuming the PDF files are located in the 'public' directory
  const ws2 = "courses/PHYS227/PHYS227_ws2.pdf";
  const ws2_sol = "courses/PHYS227/PHYS227_ws2_sol.pdf";
  const ws4 = "courses/PHYS227/PHYS227_ws4.pdf";
  const ws4_sol = "courses/PHYS227/PHYS227_ws4_sol.pdf";
  const ws6 = "courses/PHYS227/PHYS227_ws6.pdf";
  const ws6_sol = "courses/PHYS227/PHYS227_ws6_sol.pdf";

  return (
    <div>
      <Typography variant="h6">PHYS227</Typography>
      <Typography>
        <Link href={`/${ws2}`} target="_blank" rel="noopener noreferrer">
          {"ws2"}
        </Link>
      </Typography>
      <Typography>
        <Link href={`/${ws2_sol}`} target="_blank" rel="noopener noreferrer">
          {"ws2_sol"}
        </Link>
      </Typography>
      <Typography>
        <Link href={`/${ws4}`} target="_blank" rel="noopener noreferrer">
          {"ws4"}
        </Link>
      </Typography>
      <Typography>
        <Link href={`/${ws4_sol}`} target="_blank" rel="noopener noreferrer">
          {"ws4_sol"}
        </Link>
      </Typography>
      <Typography>
        <Link href={`/${ws6}`} target="_blank" rel="noopener noreferrer">
          {"ws6"}
        </Link>
      </Typography>
      <Typography>
        <Link href={`/${ws6_sol}`} target="_blank" rel="noopener noreferrer">
          {"ws6_sol"}
        </Link>
      </Typography>
    </div>
  );
}

// npm run deploy

export default PHYS227;
