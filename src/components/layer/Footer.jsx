import * as React from "react";
import MuiLink from "@mui/material/Link";
import { Box, Container, Typography } from "@mui/material";

function Copyright() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="body1" align="center">
        {"建議使用最新版本 "}
        {"Google Chrome / Mozilla Firefox / Edge "}
        {"或相容 W3C 網頁標準之最新版瀏覽器，以獲得最佳瀏覽體驗"}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {"Copyright © "}
        <MuiLink
          color="inherit"
          href={`${process.env.NEXT_PUBLIC_COPYRIGHT_URL}`}
        >
          選課幫手
        </MuiLink>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </Box>
  );
}

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        px: 2,
        mt: "auto",
        display: "flex",
        flexDirection: "column",
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="md">
        <Copyright />
      </Container>
    </Box>
  );
}
