import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { visualizer } from "rollup-plugin-visualizer";
import { resolve } from "path";

/**
 * Vite configuration
 * @see https://vite.dev/config
 */
export default defineConfig({
  // Configuration du serveur
  server: {
    port: 3100,
  },

  // Configuration des plugins
  plugins: [react()],

  // Configuration des alias
  resolve: {
    alias: {
      "@kared": resolve(__dirname, "src"),
    },
  },

  // Configuration de la génération du build
  build: {
    target: "modules",
    sourcemap: "hidden",
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      plugins: [visualizer({ open: false })],
      output: {
        manualChunks: (id) => {
          if (id.includes("node_modules")) {
            if (id.includes("@mui/icons-material")) {
              return "@mui/icons-material";
            } else if (id.includes("@mui/lab")) {
              return "@mui/lab";
            } else if (id.includes("@mui/material")) {
              return "@mui/material";
            } else if (id.includes("@mui/x-data-grid")) {
              return "@mui/x-data-grid";
            } else if (id.includes("@mui/x-date-pickers")) {
              return "@mui/x-date-pickers";
            }

            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
          } else {
            return "index";
          }
        },
      },
    },
  },
});
