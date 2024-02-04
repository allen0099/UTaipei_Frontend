"use client";
import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import NotificationDialog from "@/components/NotificationDialog";
import Footer from "@/ui/Footer";

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

export default function Layer(props) {
  return (
    <>
      <RootBar />
      {props.children}
      <Footer />
    </>
  );
}
