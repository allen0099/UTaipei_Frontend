"use client";
import { AppBar, Container, Toolbar, Typography } from "@mui/material";

function RootBar() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Hello World
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default function RootLayout() {
  return <RootBar />;
}
