"use client";
import * as React from "react";
import Footer from "@/ui/Footer";
import RootBar from "@/ui/RootBar";

export default function Layer(props) {
  return (
    <>
      <RootBar />
      {props.children}
      <Footer />
    </>
  );
}
