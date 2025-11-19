import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    {
      name: "ignore-well-known",
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url && req.url.startsWith("/.well-known/")) {
            // Respond with empty JSON so router doesn't throw
            res.setHeader("Content-Type", "application/json");
            res.statusCode = 200;
            res.end("{}");
            return;
          }
          next();
        });
      },
    },
    tailwindcss(),
    reactRouter(),
    tsconfigPaths(),
  ],
});
