"use client";
import * as React from "react";
import { useEffect, useState } from "react";
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
import { getNotification } from "@/api/api";

function TimeoutButton(props) {
  const { ...other } = props;
  const [time, setTime] = useState(5);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
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
  const [open, setOpen] = useState(false);
  const [cookies, setCookie] = useCookies(["acceptedNotification"]);
  const [data, setData] = useState(null);

  const notificationAccepted = cookies.acceptedNotification === true;

  const handleClose = () => {
    setOpen(false);
    setCookie("acceptedNotification", "true", {
      path: "/",
      maxAge: 60 * 60 * 24 * 3,
    });
  };

  useEffect(() => {
    if (!open) return;
    getNotification().then((data) => {
      setData(data);
    });
  }, [open]);

  if (!notificationAccepted && !open) {
    setOpen(true);
  }

  return (
    <Dialog
      sx={{ "& .MuiDialog-paper": { width: "80%" } }}
      open={!notificationAccepted && open}
      maxWidth="md"
    >
      <DialogTitle>學校公告</DialogTitle>
      <DialogContent dividers>
        {data ? (
          <DialogContentText id="alert-dialog-description">
            {data.data.map((item, index) => {
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
        ) : (
          <DialogContentText>取得學校公告中...</DialogContentText>
        )}
      </DialogContent>
      <DialogActions>
        <TimeoutButton onClick={handleClose} />
      </DialogActions>
    </Dialog>
  );
}
