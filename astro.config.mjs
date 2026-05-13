import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://giftedtogrowtutoring.com",
  integrations: [sitemap()],
  build: {
    assets: "_assets",
  },
});
