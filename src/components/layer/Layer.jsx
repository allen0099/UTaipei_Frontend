"use client";
import * as React from "react";
import Footer from "@/components/layer/Footer";
import RootBar from "@/components/layer/RootBar";
import NotificationDialog from "@/components/NotificationDialog";
import ContextsProvider from "@/contexts/ContextsProvider";

export default function Layer(props) {
  return (
    <>
      <RootBar />
      <NotificationDialog />
      <ContextsProvider>{props.children}</ContextsProvider>
      <Footer />
    </>
  );
}
