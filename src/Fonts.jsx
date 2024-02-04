"use client";
import { Noto_Sans_TC, Roboto, Source_Code_Pro } from "next/font/google";

const tc = Noto_Sans_TC({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
}); // Traditional Chinese

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
}); // English

const monospace = Source_Code_Pro({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export function BaseFont() {
  return `${tc.style.fontFamily}, ${roboto.style.fontFamily}`;
}

export function MonoFont() {
  return monospace.style.fontFamily;
}
