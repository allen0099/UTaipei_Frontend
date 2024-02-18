import * as React from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { CssBaseline } from "@mui/material";
import Box from "@mui/material/Box";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Theme from "@/theme/Theme";
import Layer from "@/components/layer/Layer";

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "cyan" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export const metadata = {
  metadataBase: new URL("https://utc.allen0099.tw/"),
  title: {
    template: "北市大選課小幫手 - %s",
    default: "北市大選課小幫手",
  },
  keywords: [
    "臺北市立大學",
    "北市大",
    "排課幫手",
    "排課",
    "選課",
    "幫手",
    "排課表",
    "查詢課程",
    "課程",
    "依時間",
    "時間",
    "查課",
  ],
  description:
    "提供直觀界面，輕鬆查詢課程，依時間排出理想課表，讓選課不再是煩惱。",
  openGraph: {
    title: "臺北市立大學 - 選課小幫手",
    description:
      "輕鬆查詢課程、依時間排課，讓選課不再是煩惱！立即探索，輕鬆管理您的學習計劃！",
    url: "/",
    siteName: "臺北市立大學 - 選課小幫手",
    images: [
      {
        url: "/api/og", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "/api/og", // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: "選課小幫手",
      },
    ],
    locale: "zh_TW",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "臺北市立大學 - 選課小幫手",
    description:
      "輕鬆查詢課程、依時間排課，讓選課不再是煩惱！我們提供直觀界面，助您建立理想課表。",
    siteId: "798127600384151552",
    creator: "@_allen0099",
    creatorId: "798127600384151552",
    images: ["/api/og"], // Must be an absolute URL
  },
};

export default function Layout(props) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <Theme>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Layer>
              <Box sx={{ minHeight: "85vh" }}>{props.children}</Box>
            </Layer>
          </Theme>
        </AppRouterCacheProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
