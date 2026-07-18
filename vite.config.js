import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: [
        "favicon.ico",
        "apple-touch-icon.png",
      ],
      manifest: {
        name: "Elaris",
        short_name: "Elaris",
        description:
          "A world built by choice, sustained by love, and remembered through legacy.",
        theme_color: "#f472b6",
        background_color: "#fffaf8",
        display: "standalone",
        orientation: "portrait",
        start_url: "/",
        scope: "/",
        icons: [
          {
            src: "/icons/icon-192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/icons/icon-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/icons/icon-512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
        ],
        display_override: [
          "window-controls-overlay",
          "standalone",
        ],
        screenshots: [
          {
            src: "/screenshots/home.png",
            sizes: "1170x2532",
            type: "image/png"
          }
        ],
        shortcuts: [
          {
            name: "Lumaris",
            short_name: "Chapters",
            url: "/chapters",
            icons: [
              {
                src: "/icons/icon-192.png",
                sizes: "192x192"
              }
            ]
          },
          {
            name: "Sonari",
            short_name: "Music",
            url: "/soundtrack",
            icons: [
              {
                src: "/icons/icon-192.png",
                sizes: "192x192"
              }
            ]
          },
          {
            name: "Journey",
            short_name: "Timeline",
            url: "/journey",
            icons: [
              {
                src: "/icons/icon-192.png",
                sizes: "192x192"
              }
            ]
          }
        ]
      },
    }),
  ],
});