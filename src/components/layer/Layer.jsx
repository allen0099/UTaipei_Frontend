"use client";
import * as React from "react";
import Footer from "@/components/layer/Footer";
import RootBar from "@/components/layer/RootBar";
import NotificationDialog from "@/components/NotificationDialog";

export default function Layer(props) {
  return (
    <>
      <RootBar />
      <NotificationDialog />
      {props.children}
      <Footer />
    </>
  );
}
