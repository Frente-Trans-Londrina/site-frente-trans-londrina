import { ImageResponse } from "next/og";

export const alt = "Frente Trans Londrina: em breve";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const STRIPES = ["#5bcefa", "#f5a9b8", "#ffffff", "#f5a9b8", "#5bcefa"];

// Imagem de pré-visualização do link quando o site for compartilhado.
export default function Image() {
  return new ImageResponse(
    (
      <div style={{ display: "flex", flexDirection: "column", width: "100%", height: "100%", position: "relative" }}>
        {STRIPES.map((color, i) => (
          <div key={i} style={{ display: "flex", flex: 1, background: color }} />
        ))}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: 64,
            color: "#14172b",
          }}
        >
          <div style={{ display: "flex", fontSize: 32, fontWeight: 700, letterSpacing: 6, textTransform: "uppercase" }}>
            Frente Trans Londrina
          </div>
          <div style={{ display: "flex", fontSize: 220, fontWeight: 800, letterSpacing: -8, lineHeight: 0.9 }}>
            Em breve.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
