import * as React from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import Theme from "@/Theme";
import { CssBaseline } from "@mui/material";
import Layer from "@/ui/Layer";
import Box from "@mui/material/Box";

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "cyan" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export const metadata = {
  title: {
    template: "選課幫手 - %s",
    default: "選課幫手",
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
  description: "以舒服的介面查詢課程、根據時間排出理想課表，選課不再頭疼~",
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
              <Box sx={{ minHeight: "100vh" }}>{props.children}</Box>
            </Layer>
          </Theme>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
