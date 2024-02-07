"use client";
import * as React from "react";
import Footer from "@/components/layer/Footer";
import RootBar from "@/components/layer/RootBar";

export default function Layer(props) {
  return (
    <>
      <RootBar />
      {props.children}
      <Footer />
    </>
  );
}
