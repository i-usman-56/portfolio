import { profile } from "@data";
import { ImageResponse } from "next/og";

import { siteConfig } from "@/config/site";

export const alt = siteConfig.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Social preview image (Open Graph + Twitter), generated at build time from `data.ts`.
 * Light and typographic to match the site. Add an `opengraph-image.tsx` inside a route
 * folder to override it for that route.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 80,
        background: "#ffffff",
        color: "#0a0a0a",
        borderTop: "12px solid #0a0a0a",
      }}
    >
      <div style={{ fontSize: 28, color: "#737373" }}>
        {siteConfig.url.replace(/^https?:\/\//, "")}
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: 84, fontWeight: 700, letterSpacing: -2 }}>{profile.name}</div>
        <div style={{ fontSize: 40, color: "#525252", marginTop: 12 }}>{profile.role}</div>
      </div>
      <div style={{ fontSize: 28, color: "#737373" }}>{profile.location}</div>
    </div>,
    size,
  );
}
