import { ImageResponse } from "next/og";
// App router includes @vercel/og.
// No need to install it.

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 40,
          color: "black",
          backgroundColor: "white",
          backgroundImage: "linear-gradient(to bottom, #dbf4ff, #fff1f1)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          flexWrap: "nowrap",
          padding: "50px 200px",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <svg
          height={120}
          viewBox="0 0 100 100"
          fill="green"
          style={{ margin: "0 75px" }}
        >
          <g
            transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)"
            stroke="none"
          >
            <path d="M647 889 c-31 -26 -58 -35 -155 -54 -64 -13 -130 -28 -146 -34 -16 -7 -32 -8 -35 -4 -13 19 -96 73 -111 73 -39 0 -80 -155 -80 -300 0 -78 -4 -111 -15 -126 -22 -29 -19 -106 5 -137 12 -14 26 -40 32 -58 10 -28 8 -33 -18 -54 -26 -20 -27 -25 -16 -49 17 -37 39 -42 73 -17 l29 21 -11 -24 c-14 -30 -7 -51 21 -66 17 -9 24 -7 45 14 23 23 25 24 67 9 33 -11 75 -14 178 -11 126 5 140 7 205 37 39 18 82 44 97 58 26 25 74 131 81 180 2 11 9 29 17 38 18 22 15 122 -5 145 -8 9 -15 30 -15 46 0 122 -122 344 -189 344 -9 0 -33 -14 -54 -31z m96 -28 c69 -76 127 -214 127 -302 0 -34 -4 -41 -27 -50 -16 -6 -35 -17 -43 -24 -52 -47 -414 -98 -443 -63 -18 23 -73 30 -87 13 -16 -20 -45 -19 -93 2 l-39 18 5 130 c4 127 26 228 55 257 11 11 58 -13 100 -52 22 -21 24 -21 70 -6 69 23 229 48 254 40 18 -5 20 -3 15 15 -4 15 2 27 20 41 36 28 46 26 86 -19z m131 -533 c-16 -52 -56 -134 -76 -155 -11 -12 -55 -37 -97 -55 -73 -32 -81 -33 -201 -32 -110 0 -200 14 -200 30 0 3 15 32 33 65 l32 59 81 0 c110 0 263 33 349 74 84 41 88 42 79 14z m-694 -68 c0 -19 -18 -19 -23 -1 -3 14 -1 18 9 14 8 -3 14 -9 14 -13z" />
            <path d="M645 779 c-59 -24 -79 -39 -67 -51 9 -9 145 45 150 61 5 16 -27 12 -83 -10z" />
            <path d="M348 692 c-71 -24 -99 -42 -65 -42 27 0 151 47 155 58 5 16 1 15 -90 -16z" />
            <path d="M515 664 c-22 -8 -46 -16 -53 -19 -10 -4 -6 -14 15 -35 15 -17 32 -30 38 -30 12 0 75 75 75 89 0 15 -26 13 -75 -5z" />
          </g>
        </svg>
        <div
          style={{
            display: "flex",
            fontSize: 40,
            fontStyle: "normal",
            color: "black",
            marginTop: 30,
            lineHeight: 1.8,
            whiteSpace: "pre-wrap",
          }}
        >
          <b>選課小幫手</b>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
