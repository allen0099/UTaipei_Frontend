"use client";
import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import NotificationDialog from "@/components/NotificationDialog";

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
      <NotificationDialog />
    </AppBar>
  );
}

export default function RootLayout() {
  return <RootBar />;
}
