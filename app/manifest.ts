import type { MetadataRoute } from "next";
import { company } from "../lib/company";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: company.name,
    short_name: "Obsidian",
    description: company.tagline,
    start_url: "/",
    display: "standalone",
    background_color: "#0B0B0A",
    theme_color: "#F8F3E8",
    icons: [{ src: "/logo.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
