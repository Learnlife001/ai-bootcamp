import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Chigozie G. Okuma â€” AI Portfolio",
    short_name: "CGO Portfolio",
    description: "AI applications, full stack development, automation, cloud and cybersecurity projects by Chigozie G. Okuma.",
    start_url: "/",
    display: "standalone",
    background_color: "#07090d",
    theme_color: "#07090d",
    icons: [{ src: "/icon.jpg", sizes: "512x512", type: "image/jpeg" }],
  };
}
