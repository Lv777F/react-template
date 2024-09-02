import { defineConfig } from "@farmfe/core";
import postcss from "@farmfe/js-plugin-postcss";
import react from "@farmfe/plugin-react";
import path from "node:path";

export default defineConfig({
	plugins: [react(), postcss()],
	compilation: {
		resolve: {
			alias: {
				"@": path.resolve(__dirname, "src"),
			},
		},
	},
});
