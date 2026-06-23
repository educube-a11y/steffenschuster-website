import { ImageResponse } from "next/og";
import fs from "fs";
import path from "path";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  const imgBuffer = fs.readFileSync(path.join(process.cwd(), "public", "stage.jpg"));
  const imgSrc = `data:image/jpeg;base64,${imgBuffer.toString("base64")}`;

  return new ImageResponse(
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        background: "#0f1f2e",
        fontFamily: "sans-serif",
        position: "relative",
      }}
    >
      {/* Photo — right panel */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "620px",
          height: "630px",
          display: "flex",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imgSrc}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 15%",
          }}
        />
      </div>

      {/* Gradient overlay: dark bg bleeds over photo */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          background: "linear-gradient(90deg, #0f1f2e 42%, rgba(15,31,46,0.55) 62%, transparent 82%)",
        }}
      />

      {/* Left content */}
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          width: "600px",
          height: "100%",
          padding: "64px 72px",
        }}
      >
        {/* Name badge — top left */}
        <div
          style={{
            position: "absolute",
            top: "50px",
            left: "72px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#ff9800",
            }}
          />
          <span
            style={{
              color: "rgba(255,255,255,0.75)",
              fontSize: "15px",
              fontWeight: 600,
              letterSpacing: "0.4px",
            }}
          >
            Steffen Schuster
          </span>
        </div>

        {/* Accent rule + role tag */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "22px",
          }}
        >
          <div style={{ width: "22px", height: "2px", background: "#ff9800" }} />
          <span
            style={{
              color: "#ff9800",
              fontSize: "11.5px",
              fontWeight: 700,
              letterSpacing: "2.2px",
            }}
          >
            PÄDAGOGE · KI-PIONIER · GESTALTER
          </span>
        </div>

        {/* Main headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "32px",
          }}
        >
          <span
            style={{
              color: "#ffffff",
              fontSize: "60px",
              fontWeight: 700,
              lineHeight: 1.06,
            }}
          >
            Lernen neu denken.
          </span>
          <span
            style={{
              color: "#ff9800",
              fontSize: "60px",
              fontWeight: 600,
              lineHeight: 1.06,
              fontStyle: "italic",
            }}
          >
            Mit KI.
          </span>
        </div>

        {/* Footer: domain + location */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px",
          }}
        >
          <span style={{ color: "rgba(255,255,255,0.52)", fontSize: "16px" }}>
            steffenschuster.de
          </span>
          <div
            style={{
              width: "1px",
              height: "16px",
              background: "rgba(255,255,255,0.18)",
            }}
          />
          <span style={{ color: "rgba(255,255,255,0.34)", fontSize: "14px" }}>
            Hamburg · KI &amp; Bildung
          </span>
        </div>
      </div>
    </div>,
    { ...size }
  );
}
