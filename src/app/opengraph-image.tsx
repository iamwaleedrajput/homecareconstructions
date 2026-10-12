import { ImageResponse } from "next/og";

export const alt =
  "Home Care Constructions — Premium Design, Build & Transform";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "68px 78px",
          position: "relative",
          overflow: "hidden",
          background: "#100f0f",
          color: "#f0d8ad",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 650,
            height: 650,
            right: -145,
            top: -255,
            border: "1px solid rgba(237,186,96,.28)",
            borderRadius: "50%",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 470,
            height: 470,
            right: -55,
            top: -165,
            border: "1px solid rgba(237,186,96,.19)",
            borderRadius: "50%",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 28,
            border: "1px solid rgba(237,186,96,.16)",
            display: "flex",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              color: "#edba60",
              fontSize: 18,
              fontWeight: 700,
              letterSpacing: 5,
              textTransform: "uppercase",
            }}
          >
            <span
              style={{
                width: 38,
                height: 2,
                background: "#edba60",
                display: "flex",
              }}
            />
            Home Care Constructions
          </div>
          <div
            style={{
              maxWidth: 850,
              display: "flex",
              flexDirection: "column",
              fontSize: 76,
              lineHeight: 1.08,
              letterSpacing: -2,
              fontWeight: 500,
            }}
          >
            <span>Thoughtful spaces.</span>
            <span style={{ color: "#edba60" }}>Built to last.</span>
          </div>
          <div
            style={{
              display: "flex",
              color: "rgba(240,216,173,.72)",
              fontSize: 22,
              letterSpacing: 1,
            }}
          >
            Construction · Interiors · Modular Kitchens
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(237,186,96,.34)",
            paddingTop: 20,
            color: "rgba(240,216,173,.7)",
            fontSize: 15,
            letterSpacing: 3,
            textTransform: "uppercase",
          }}
        >
          <span>Design · Build · Transform</span>
          <span>Rawalpindi, Pakistan</span>
        </div>
      </div>
    ),
    { ...size },
  );
}