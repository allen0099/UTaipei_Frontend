"use client";
import * as React from "react";
import { Box, Typography } from "@mui/material";

export default function Logo(props) {
  const { sx, ...other } = props;

  return (
    <Box sx={{ ...sx }} {...other}>
      <Typography
        component="a"
        href="/"
        variant="h5"
        noWrap
        sx={{
          color: "inherit",
          textDecoration: "none",
        }}
      >
        選課助手
      </Typography>
    </Box>
  );
}
