"use client";
import * as React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Link,
  Typography,
} from "@mui/material";
import { useCookies } from "react-cookie";

const sampleJson = [
  { text: "【說明】", href: null, linebreak: false },
  {
    text: "",
    href: null,
    linebreak: true,
  },
  {
    text: "文字串一",
    href: null,
    linebreak: false,
  },
  {
    text: "覆蓋二",
    href: null,
    linebreak: false,
  },
  { text: "", href: null, linebreak: true },
  {
    text: "https://google.com",
    href: "https://google.com",
    linebreak: false,
  },
  {
    text: "",
    href: null,
    linebreak: true,
  },
  {
    text: "測試用網址",
    href: "https://www.google.com",
    linebreak: false,
  },
];

function TimeoutButton(props) {
  const { ...other } = props;
  const [time, setTime] = React.useState(5);
  const [disabled, setDisabled] = React.useState(true);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime === 1) {
          clearInterval(timer);
          setDisabled(false);
        }
        return prevTime - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Button disabled={disabled} {...other}>
      {time > 0 ? `等待 ${time} 秒` : "我理解以上內容，三天內不提示"}
    </Button>
  );
}

export default function NotificationDialog() {
  const [open, setOpen] = React.useState(true);
  const [cookies, setCookie, removeCookie] = useCookies([
    "acceptedNotification",
  ]);

  const notificationAccepted = cookies.acceptedNotification === true;

  const handleClose = (value) => {
    setOpen(false);
    setCookie("acceptedNotification", "true", {
      path: "/",
      maxAge: 60 * 60 * 24 * 3,
    });
  };

  return (
    <Dialog
      sx={{ "& .MuiDialog-paper": { width: "80%" } }}
      open={!notificationAccepted && open}
      maxWidth="md"
    >
      <DialogTitle>學校公告</DialogTitle>
      <DialogContent dividers>
        <DialogContentText id="alert-dialog-description">
          {sampleJson.map((item, index) => {
            if (item.linebreak) return <br key={index} />;
            return item.href ? (
              <Link href={item.href} key={index}>
                {item.text}
              </Link>
            ) : (
              <Typography key={index} display="inline">
                {item.text}
              </Typography>
            );
          })}
          <Typography color="error">
            <strong>注意：</strong>本內容僅供參考，請以學校公告為準。
          </Typography>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <TimeoutButton onClick={handleClose} />
      </DialogActions>
    </Dialog>
  );
}
