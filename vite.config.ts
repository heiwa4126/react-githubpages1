import { minifyHtml } from "@heiwa4126/vite-plugin-minify-html";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
	base: process.env.GITHUB_REPO_NAME ?? "./",
	plugins: [react(), minifyHtml()],
	build: {
		minify: true,
		rolldownOptions: {
			external: ["react", "react-dom/client", "react-router"],
			output: {
				minify: {
					compress: {
						dropConsole: true,
						dropDebugger: true,
					},
				},
			},
		},
	},
});
